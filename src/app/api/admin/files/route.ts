import { NextRequest, NextResponse } from "next/server";
import { getFiles, deleteFileChunks } from "@/lib/rag-store";
import { checkAdminAuth } from "@/lib/cms-auth";

export async function GET(request: NextRequest) {
  if (!checkAdminAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const files = getFiles();
  return NextResponse.json({ files });
}

export async function DELETE(request: NextRequest) {
  if (!checkAdminAuth(request)) {
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
