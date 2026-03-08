import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.email || !body.firstName || !body.lastName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    // Optional: send to Supabase or email service here
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
