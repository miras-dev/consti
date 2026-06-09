import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import path from "path";

const DATA_DIR = process.env.VERCEL ? "/tmp/data" : path.join(process.cwd(), "data");
const FILES_DIR = path.join(DATA_DIR, "uploads");
const CHUNKS_FILE = path.join(DATA_DIR, "chunks.json");
const SETTINGS_FILE = path.join(DATA_DIR, "settings.json");

function ensureDirs() {
  if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });
  if (!existsSync(FILES_DIR)) mkdirSync(FILES_DIR, { recursive: true });
}

export interface FileRecord {
  id: string;
  name: string;
  size: number;
  uploadedAt: string;
  chunkCount: number;
}

export interface TextChunk {
  id: string;
  fileId: string;
  fileName: string;
  content: string;
}

export interface ChatSettings {
  systemPrompt: string;
  welcomeMessage: string;
  modelName: string;
  temperature: number;
  ragEnabled: boolean;
  maxTokens: number;
}

const DEFAULT_SETTINGS: ChatSettings = {
  systemPrompt:
    "You are a helpful assistant for Constantin Nixdorff's financial and career consulting website. You help visitors understand the services offered, answer questions about financial planning, career coaching, and guide them to book consultations. Be professional, knowledgeable, and friendly. If you have context from uploaded documents, use that information to provide more specific answers.",
  welcomeMessage:
    "Hello! I'm Constantin's AI assistant. How can I help you with financial planning or career consulting today?",
  modelName: "gpt-4o-mini",
  temperature: 0.7,
  ragEnabled: true,
  maxTokens: 1000,
};

export function getSettings(): ChatSettings {
  ensureDirs();
  if (!existsSync(SETTINGS_FILE)) {
    writeFileSync(SETTINGS_FILE, JSON.stringify(DEFAULT_SETTINGS, null, 2));
    return DEFAULT_SETTINGS;
  }
  return JSON.parse(readFileSync(SETTINGS_FILE, "utf-8"));
}

export function saveSettings(settings: ChatSettings): void {
  ensureDirs();
  writeFileSync(SETTINGS_FILE, JSON.stringify(settings, null, 2));
}

export function getChunks(): TextChunk[] {
  ensureDirs();
  if (!existsSync(CHUNKS_FILE)) return [];
  return JSON.parse(readFileSync(CHUNKS_FILE, "utf-8"));
}

export function saveChunks(chunks: TextChunk[]): void {
  ensureDirs();
  writeFileSync(CHUNKS_FILE, JSON.stringify(chunks, null, 2));
}

export function getFiles(): FileRecord[] {
  const chunks = getChunks();
  const fileMap = new Map<string, FileRecord>();
  for (const chunk of chunks) {
    if (!fileMap.has(chunk.fileId)) {
      fileMap.set(chunk.fileId, {
        id: chunk.fileId,
        name: chunk.fileName,
        size: 0,
        uploadedAt: new Date().toISOString(),
        chunkCount: 0,
      });
    }
    const file = fileMap.get(chunk.fileId)!;
    file.chunkCount++;
    file.size += chunk.content.length;
  }
  return Array.from(fileMap.values());
}

export function deleteFileChunks(fileId: string): void {
  const chunks = getChunks();
  const remaining = chunks.filter((c) => c.fileId !== fileId);
  saveChunks(remaining);
}

export function splitTextIntoChunks(
  text: string,
  chunkSize: number = 1000,
  overlap: number = 200
): string[] {
  const chunks: string[] = [];
  let start = 0;
  while (start < text.length) {
    const end = Math.min(start + chunkSize, text.length);
    chunks.push(text.slice(start, end));
    start += chunkSize - overlap;
  }
  return chunks;
}

export function searchChunks(query: string, topK: number = 5): TextChunk[] {
  const chunks = getChunks();
  if (chunks.length === 0) return [];

  const queryLower = query.toLowerCase();
  const queryWords = queryLower.split(/\s+/).filter((w) => w.length > 2);

  const scored = chunks.map((chunk) => {
    const contentLower = chunk.content.toLowerCase();
    let score = 0;
    for (const word of queryWords) {
      const matches = contentLower.split(word).length - 1;
      score += matches;
    }
    if (contentLower.includes(queryLower)) {
      score += 10;
    }
    return { chunk, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored
    .slice(0, topK)
    .filter((s) => s.score > 0)
    .map((s) => s.chunk);
}

export function getFilesDir(): string {
  ensureDirs();
  return FILES_DIR;
}
