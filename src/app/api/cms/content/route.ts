import { NextRequest, NextResponse } from "next/server";
import { getAdminName } from "@/lib/cms-auth";
import { getTextOverrides, saveTextOverrides } from "@/lib/cms-store";

export async function GET() {
  const overrides = getTextOverrides();
  return NextResponse.json(overrides, {
    headers: {
      "Cache-Control": "public, max-age=60, stale-while-revalidate=300",
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const adminName = getAdminName(request);
    if (!adminName) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { overrides, commitMessage } = body;
    saveTextOverrides(overrides, adminName, commitMessage);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to save content" },
      { status: 500 }
    );
  }
}
