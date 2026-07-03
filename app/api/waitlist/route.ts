import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.email || !body.firstName) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // TODO: connect waitlist form to email/SMS provider (Klaviyo/Resend via KLAVIYO_API_KEY / RESEND_API_KEY)
  // TODO: store waitlist leads in database (waitlist_signups table — see supabase-schema.sql)
  console.log("[waitlist] new signup", body);

  return NextResponse.json({ ok: true });
}
