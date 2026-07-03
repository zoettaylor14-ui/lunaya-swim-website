import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.email) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // TODO: connect waitlist form to email/SMS provider (Klaviyo/Resend via KLAVIYO_API_KEY / RESEND_API_KEY)
  // TODO: store waitlist leads in database (waitlist_signups table — see supabase-schema.sql;
  //       add a favorite_shade column alongside the existing interest/zodiac_sign fields)
  // TODO: generate/send the 10% launch discount code for signups where source is
  //       "welcome-popup-10-off" once an email provider is connected
  console.log("[waitlist] new signup", body);

  return NextResponse.json({ ok: true });
}
