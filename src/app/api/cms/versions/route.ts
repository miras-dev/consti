import { NextRequest, NextResponse } from "next/server";
import { getAdminName } from "@/lib/cms-auth";
import { getVersions, revertToVersion } from "@/lib/cms-store";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const adminName = getAdminName(request);
  if (!adminName) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const versions = getVersions();
  return NextResponse.json({ versions });
}

export async function POST(request: NextRequest) {
  try {
    const adminName = getAdminName(request);
    if (!adminName) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { versionId } = body;

    if (!versionId) {
      return NextResponse.json(
        { error: "Missing versionId" },
        { status: 400 }
      );
    }

    revertToVersion(versionId, adminName);
    return NextResponse.json({ success: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to revert";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
