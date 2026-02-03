import { NextRequest, NextResponse } from "next/server";
import {
  getChunks,
  saveChunks,
  splitTextIntoChunks,
  TextChunk,
} from "@/lib/rag-store";

function checkAuth(request: NextRequest): boolean {
  const auth = request.headers.get("authorization");
  const expected = Buffer.from(
    `${process.env.ADMIN_USERNAME || "admin"}:${process.env.ADMIN_PASSWORD || "admin123"}`
  ).toString("base64");
  return auth === `Basic ${expected}`;
}

export async function POST(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const allowedTypes = [
      "text/plain",
      "text/markdown",
      "application/pdf",
      "text/csv",
    ];
    const allowedExtensions = [".txt", ".md", ".pdf", ".csv"];
    const ext = "." + file.name.split(".").pop()?.toLowerCase();

    if (
      !allowedTypes.includes(file.type) &&
      !allowedExtensions.includes(ext)
    ) {
      return NextResponse.json(
        { error: "Unsupported file type. Allowed: .txt, .md, .pdf, .csv" },
        { status: 400 }
      );
    }

    let text = "";

    if (ext === ".pdf") {
      const buffer = Buffer.from(await file.arrayBuffer());
      try {
        const { PDFParse } = await import("pdf-parse");
        const parser = new PDFParse({ data: buffer });
        const result = await parser.getText();
        text = result.text || "";
      } catch {
        return NextResponse.json(
          { error: "Failed to parse PDF file" },
          { status: 400 }
        );
      }
    } else {
      text = await file.text();
    }

    if (!text.trim()) {
      return NextResponse.json(
        { error: "File is empty or could not be read" },
        { status: 400 }
      );
    }

    const fileId = `file_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
    const textChunks = splitTextIntoChunks(text);

    const newChunks: TextChunk[] = textChunks.map((content, index) => ({
      id: `${fileId}_chunk_${index}`,
      fileId,
      fileName: file.name,
      content,
    }));

    const existingChunks = getChunks();
    saveChunks([...existingChunks, ...newChunks]);

    return NextResponse.json({
      success: true,
      fileId,
      fileName: file.name,
      chunkCount: newChunks.length,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Upload error:", message);
    return NextResponse.json(
      { error: "Failed to process file" },
      { status: 500 }
    );
  }
}
