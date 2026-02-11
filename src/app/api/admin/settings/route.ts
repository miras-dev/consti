import { NextRequest, NextResponse } from "next/server";
import { getSettings, saveSettings } from "@/lib/rag-store";
import { checkAdminAuth } from "@/lib/cms-auth";

export const dynamic = "force-dynamic";

export async function GET() {
  const settings = getSettings();
  return NextResponse.json(settings);
}

export async function POST(request: NextRequest) {
  try {
    if (!checkAdminAuth(request)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    saveSettings(body);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to save settings" },
      { status: 500 }
    );
  }
}
