import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.email || !body.name) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // TODO: connect custom access requests to email/SMS provider (Klaviyo/Resend)
  // TODO: store requests in database (custom_bikini_requests table — see supabase-schema.sql;
  //       dream_shade replaces bikini_color, coverage_preference/budget_range/inspiration_file_url
  //       are no longer collected pre-launch)
  console.log("[custom-request] new request", body);

  return NextResponse.json({ ok: true });
}
