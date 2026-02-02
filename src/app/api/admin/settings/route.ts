import { NextRequest, NextResponse } from "next/server";
import { getSettings, saveSettings } from "@/lib/rag-store";

export async function GET() {
  const settings = getSettings();
  return NextResponse.json(settings);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const auth = request.headers.get("authorization");
    const expected = Buffer.from(
      `${process.env.ADMIN_USERNAME || "admin"}:${process.env.ADMIN_PASSWORD || "admin123"}`
    ).toString("base64");

    if (auth !== `Basic ${expected}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    saveSettings(body);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to save settings" },
      { status: 500 }
    );
  }
}
