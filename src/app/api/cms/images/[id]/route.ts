import { NextRequest, NextResponse } from "next/server";
import { readFileSync } from "fs";
import { getImagePath, getImageOverrides } from "@/lib/cms-store";

export const dynamic = "force-dynamic";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const filePath = getImagePath(id);

    if (!filePath) {
      return NextResponse.json({ error: "Image not found" }, { status: 404 });
    }

    const overrides = getImageOverrides();
    const override = overrides.find((o) => o.id === id);
    const mimeType = override?.mimeType || "image/jpeg";

    const buffer = readFileSync(filePath);

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": mimeType,
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to serve image" },
      { status: 500 }
    );
  }
}
