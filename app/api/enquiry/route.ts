import { NextResponse } from "next/server";

/**
 * Receives admission enquiries from <EnquiryForm>.
 *
 * TODO before launch — choose one delivery channel:
 *  1. Email via Resend/SMTP to svmjpr@gmail.com
 *  2. Append a row to a Google Sheet the office already uses
 *  3. Save to a database and show it in a small admin page
 * Until then enquiries are only written to the server log.
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "The form data could not be read" }, { status: 400 });
  }

  // honeypot: real people never fill this hidden field
  if (typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const parent = String(body.parent ?? "").trim();
  const child = String(body.child ?? "").trim();
  const grade = String(body.grade ?? "").trim();
  const phone = String(body.phone ?? "").replace(/[^\d+]/g, "");
  const message = String(body.message ?? "").trim().slice(0, 1000);

  if (!parent || !child || !grade) {
    return NextResponse.json({ error: "Please fill the parent's name, child's name and class" }, { status: 422 });
  }
  if (phone.replace(/\D/g, "").length < 10) {
    return NextResponse.json({ error: "Please enter a 10-digit mobile number" }, { status: 422 });
  }

  console.info("[enquiry]", { parent, child, grade, phone, message, at: new Date().toISOString() });

  return NextResponse.json({ ok: true });
}
