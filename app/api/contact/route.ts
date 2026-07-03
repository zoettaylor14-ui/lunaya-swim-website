import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.email || !body.name || !body.message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // TODO: connect contact form to email provider (Resend via RESEND_API_KEY) to notify Zoe + Lilly
  // TODO: store submissions in database (contact_submissions table — see supabase-schema.sql)
  console.log("[contact] new submission", body);

  return NextResponse.json({ ok: true });
}
