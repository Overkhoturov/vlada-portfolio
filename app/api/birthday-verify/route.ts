import { NextRequest, NextResponse } from "next/server";
import { checkPetName, createAccessToken } from "@/utils/birthday/token";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const answer = typeof body?.answer === "string" ? body.answer : "";

  if (!answer.trim()) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (!checkPetName(answer)) {
    return NextResponse.json({ ok: false }, { status: 200 });
  }

  const token = createAccessToken(answer);

  return NextResponse.json({ ok: true, token }, { status: 200 });
}
