import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.email || !body.name) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // TODO: connect custom bikini requests to email/SMS provider (Klaviyo/Resend)
  // TODO: store requests in database (custom_bikini_requests table — see supabase-schema.sql)
  // TODO: handle inspiration file upload to storage once a provider is connected
  console.log("[custom-request] new request", body);

  return NextResponse.json({ ok: true });
}
