import { NextRequest, NextResponse } from "next/server";
import { writeFileSync } from "fs";
import path from "path";
import { getAdminName } from "@/lib/cms-auth";
import {
  getImageOverrides,
  saveImageOverride,
  deleteImageOverride,
  getCmsImagesDir,
} from "@/lib/cms-store";

export const dynamic = "force-dynamic";

export async function GET() {
  const overrides = getImageOverrides();
  return NextResponse.json({ overrides });
}

export async function POST(request: NextRequest) {
  try {
    const adminName = getAdminName(request);
    if (!adminName) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await request.formData();
    const file = formData.get("file") as File | null;
    const imageId = formData.get("imageId") as string | null;
    const commitMessage = formData.get("commitMessage") as string | null;

    if (!file || !imageId) {
      return NextResponse.json(
        { error: "Missing file or imageId" },
        { status: 400 }
      );
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/svg+xml", "image/gif"];
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Invalid file type. Allowed: JPEG, PNG, WebP, SVG, GIF" },
        { status: 400 }
      );
    }

    const ext = file.name.split(".").pop() || "jpg";
    const randomSuffix = Math.random().toString(36).substring(2, 8);
    const filename = `img_${Date.now()}_${randomSuffix}.${ext}`;

    const buffer = Buffer.from(await file.arrayBuffer());
    const filePath = path.join(getCmsImagesDir(), filename);
    writeFileSync(filePath, buffer);

    saveImageOverride(
      {
        id: imageId,
        filename,
        mimeType: file.type,
        uploadedAt: new Date().toISOString(),
        originalName: file.name,
      },
      adminName,
      commitMessage || undefined
    );

    return NextResponse.json({
      success: true,
      imageId,
      filename,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to upload image" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const adminName = getAdminName(request);
    if (!adminName) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const imageId = searchParams.get("id");
    const commitMessage = searchParams.get("commitMessage");

    if (!imageId) {
      return NextResponse.json(
        { error: "Missing image id" },
        { status: 400 }
      );
    }

    deleteImageOverride(imageId, adminName, commitMessage || undefined);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to delete image" },
      { status: 500 }
    );
  }
}
