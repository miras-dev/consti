import { readFileSync, writeFileSync, existsSync, mkdirSync, unlinkSync } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const CMS_CONTENT_FILE = path.join(DATA_DIR, "cms-content.json");
const CMS_IMAGES_DIR = path.join(DATA_DIR, "cms-images");
const CMS_IMAGE_OVERRIDES_FILE = path.join(DATA_DIR, "cms-image-overrides.json");
const CMS_VERSIONS_FILE = path.join(DATA_DIR, "cms-versions.json");
const MAX_VERSIONS = 10;

function ensureCmsDirs() {
  if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });
  if (!existsSync(CMS_IMAGES_DIR)) mkdirSync(CMS_IMAGES_DIR, { recursive: true });
}

// --- Text Content ---

export interface CmsTextOverrides {
  en: Record<string, unknown>;
  de: Record<string, unknown>;
}

const EMPTY_OVERRIDES: CmsTextOverrides = { en: {}, de: {} };

export function getTextOverrides(): CmsTextOverrides {
  ensureCmsDirs();
  if (!existsSync(CMS_CONTENT_FILE)) return EMPTY_OVERRIDES;
  try {
    return JSON.parse(readFileSync(CMS_CONTENT_FILE, "utf-8"));
  } catch {
    return EMPTY_OVERRIDES;
  }
}

export function saveTextOverrides(
  overrides: CmsTextOverrides,
  adminName?: string,
  commitMessage?: string
): void {
  ensureCmsDirs();
  const previousOverrides = getTextOverrides();
  writeFileSync(CMS_CONTENT_FILE, JSON.stringify(overrides, null, 2));

  const changedEn = countChangedKeys(previousOverrides.en, overrides.en);
  const changedDe = countChangedKeys(previousOverrides.de, overrides.de);
  const parts: string[] = [];
  if (changedEn > 0) parts.push(`${changedEn} key${changedEn > 1 ? "s" : ""} in EN`);
  if (changedDe > 0) parts.push(`${changedDe} key${changedDe > 1 ? "s" : ""} in DE`);
  const description = parts.length > 0 ? `Updated ${parts.join(", ")}` : "Text content saved";

  createVersion("text", description, adminName, commitMessage);
}

function countChangedKeys(
  prev: Record<string, unknown>,
  next: Record<string, unknown>
): number {
  let count = 0;
  const allKeys = new Set([...Object.keys(prev), ...Object.keys(next)]);
  for (const key of allKeys) {
    if (JSON.stringify(prev[key]) !== JSON.stringify(next[key])) {
      count++;
    }
  }
  return count;
}

// --- Image Overrides ---

export interface CmsImageOverride {
  id: string;
  filename: string;
  mimeType: string;
  uploadedAt: string;
  originalName: string;
}

export function getImageOverrides(): CmsImageOverride[] {
  ensureCmsDirs();
  if (!existsSync(CMS_IMAGE_OVERRIDES_FILE)) return [];
  try {
    return JSON.parse(readFileSync(CMS_IMAGE_OVERRIDES_FILE, "utf-8"));
  } catch {
    return [];
  }
}

function saveImageOverridesFile(overrides: CmsImageOverride[]): void {
  ensureCmsDirs();
  writeFileSync(CMS_IMAGE_OVERRIDES_FILE, JSON.stringify(overrides, null, 2));
}

export function saveImageOverride(
  override: CmsImageOverride,
  adminName?: string,
  commitMessage?: string
): void {
  const overrides = getImageOverrides();
  const existingIndex = overrides.findIndex((o) => o.id === override.id);

  // Delete old file if replacing
  if (existingIndex >= 0) {
    const oldFile = path.join(CMS_IMAGES_DIR, overrides[existingIndex].filename);
    if (existsSync(oldFile)) unlinkSync(oldFile);
    overrides[existingIndex] = override;
  } else {
    overrides.push(override);
  }

  saveImageOverridesFile(overrides);
  createVersion("image", `Uploaded image for ${override.id}`, adminName, commitMessage);
}

export function deleteImageOverride(
  imageId: string,
  adminName?: string,
  commitMessage?: string
): void {
  const overrides = getImageOverrides();
  const existing = overrides.find((o) => o.id === imageId);
  if (existing) {
    const filePath = path.join(CMS_IMAGES_DIR, existing.filename);
    if (existsSync(filePath)) unlinkSync(filePath);
  }
  const remaining = overrides.filter((o) => o.id !== imageId);
  saveImageOverridesFile(remaining);
  createVersion("image", `Removed image override for ${imageId}`, adminName, commitMessage);
}

export function getImagePath(imageId: string): string | null {
  const overrides = getImageOverrides();
  const override = overrides.find((o) => o.id === imageId);
  if (!override) return null;
  const filePath = path.join(CMS_IMAGES_DIR, override.filename);
  if (!existsSync(filePath)) return null;
  return filePath;
}

export function getCmsImagesDir(): string {
  ensureCmsDirs();
  return CMS_IMAGES_DIR;
}

// --- Versioning ---

export interface CmsVersion {
  id: string;
  timestamp: string;
  type: "text" | "image" | "both";
  description: string;
  adminName?: string;
  commitMessage?: string;
  textContent: CmsTextOverrides;
  imageOverrides: CmsImageOverride[];
}

export function getVersions(): CmsVersion[] {
  ensureCmsDirs();
  if (!existsSync(CMS_VERSIONS_FILE)) return [];
  try {
    return JSON.parse(readFileSync(CMS_VERSIONS_FILE, "utf-8"));
  } catch {
    return [];
  }
}

function saveVersions(versions: CmsVersion[]): void {
  ensureCmsDirs();
  writeFileSync(CMS_VERSIONS_FILE, JSON.stringify(versions, null, 2));
}

function createVersion(
  type: "text" | "image" | "both",
  description: string,
  adminName?: string,
  commitMessage?: string
): void {
  const versions = getVersions();
  const randomSuffix = Math.random().toString(36).substring(2, 8);
  const version: CmsVersion = {
    id: `ver_${Date.now()}_${randomSuffix}`,
    timestamp: new Date().toISOString(),
    type,
    description,
    adminName: adminName || "unknown",
    commitMessage: commitMessage || "",
    textContent: getTextOverrides(),
    imageOverrides: getImageOverrides(),
  };

  versions.push(version);

  // Keep only the last MAX_VERSIONS
  while (versions.length > MAX_VERSIONS) {
    versions.shift();
  }

  saveVersions(versions);
}

export function revertToVersion(
  versionId: string,
  adminName?: string
): void {
  const versions = getVersions();
  const version = versions.find((v) => v.id === versionId);
  if (!version) throw new Error(`Version ${versionId} not found`);

  // Restore text overrides
  writeFileSync(CMS_CONTENT_FILE, JSON.stringify(version.textContent, null, 2));

  // Restore image overrides metadata
  // Note: we only restore the metadata, not the actual image files
  // Images that were deleted won't be recoverable, but metadata will point correctly
  saveImageOverridesFile(version.imageOverrides);

  createVersion("both", `Reverted to version from ${version.timestamp}`, adminName, "Revert to previous version");
}
