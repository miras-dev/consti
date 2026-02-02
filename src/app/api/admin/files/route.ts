import { NextRequest, NextResponse } from "next/server";
import { getFiles, deleteFileChunks } from "@/lib/rag-store";

function checkAuth(request: NextRequest): boolean {
  const auth = request.headers.get("authorization");
  const expected = Buffer.from(
    `${process.env.ADMIN_USERNAME || "admin"}:${process.env.ADMIN_PASSWORD || "admin123"}`
  ).toString("base64");
  return auth === `Basic ${expected}`;
}

export async function GET(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const files = getFiles();
  return NextResponse.json({ files });
}

export async function DELETE(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { searchParams } = new URL(request.url);
  const fileId = searchParams.get("id");
  if (!fileId) {
    return NextResponse.json({ error: "File ID required" }, { status: 400 });
  }
  deleteFileChunks(fileId);
  return NextResponse.json({ success: true });
}
