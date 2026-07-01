import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { google } from "googleapis";

const resend = new Resend(process.env.RESEND_API_KEY);

async function appendToSheet(data: {
  name: string;
  phone: string;
  category: string;
  message: string;
}) {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const timestamp = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "Sheet1!A:E",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[timestamp, data.name, data.phone, data.category, data.message]],
    },
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, phone, category, message } = body;

  if (!name || !phone || !category) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // Run both in parallel — one doesn't block the other
  const [emailResult, sheetResult] = await Promise.allSettled([
    resend.emails.send({
      from: "GreenRider Enquiry <onboarding@resend.dev>",
      to: process.env.OWNER_EMAIL!,
      subject: `New Enquiry: ${category} — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0b0f0d; color: #fff; padding: 32px; border-radius: 12px;">
          <div style="margin-bottom: 24px;">
            <span style="background: #059669; color: white; padding: 4px 12px; border-radius: 4px; font-size: 11px; font-weight: 900; letter-spacing: 0.15em; text-transform: uppercase;">
              New Enquiry · GreenRider
            </span>
          </div>
          <h2 style="color: #34d399; font-size: 22px; margin: 0 0 24px 0; text-transform: uppercase;">
            ${category}
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #1f2937;">
              <td style="padding: 12px 0; color: #6b7280; font-size: 11px; font-weight: 700; text-transform: uppercase; width: 140px;">Customer</td>
              <td style="padding: 12px 0; color: #fff; font-size: 14px; font-weight: 700;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #1f2937;">
              <td style="padding: 12px 0; color: #6b7280; font-size: 11px; font-weight: 700; text-transform: uppercase;">Mobile</td>
              <td style="padding: 12px 0; font-size: 14px; font-weight: 700; font-family: monospace;">
                <a href="tel:+91${phone}" style="color: #34d399; text-decoration: none;">+91 ${phone}</a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #1f2937;">
              <td style="padding: 12px 0; color: #6b7280; font-size: 11px; font-weight: 700; text-transform: uppercase;">Category</td>
              <td style="padding: 12px 0; color: #fff; font-size: 14px; font-weight: 700;">${category}</td>
            </tr>
            ${message ? `
            <tr>
              <td style="padding: 12px 0; color: #6b7280; font-size: 11px; font-weight: 700; text-transform: uppercase; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; color: #cbd5e1; font-size: 14px; line-height: 1.6;">${message}</td>
            </tr>` : ""}
          </table>
          <div style="margin-top: 32px; padding: 16px; background: #064e3b; border-radius: 8px;">
            <a href="tel:+91${phone}" style="display: inline-block; background: #059669; color: white; padding: 12px 24px; border-radius: 6px; font-weight: 900; font-size: 13px; text-decoration: none; text-transform: uppercase; letter-spacing: 0.1em;">
              📞 Call Now
            </a>
            <a href="https://wa.me/91${phone}?text=${encodeURIComponent(`Namaskara, I am calling regarding your enquiry for ${category}.`)}" style="display: inline-block; background: #25D366; color: white; padding: 12px 24px; border-radius: 6px; font-weight: 900; font-size: 13px; text-decoration: none; text-transform: uppercase; letter-spacing: 0.1em; margin-left: 12px;">
              💬 WhatsApp
            </a>
          </div>
          <p style="color: #374151; font-size: 11px; margin-top: 24px; text-align: center;">
            GreenRider Enterprises · ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
          </p>
        </div>
      `,
    }),
    appendToSheet({ name, phone, category, message }),
  ]);

  // Log failures but don't block the user
  if (emailResult.status === "rejected")
    console.error("Email failed:", emailResult.reason);
  if (sheetResult.status === "rejected")
    console.error("Sheet failed:", sheetResult.reason);

  // As long as at least one succeeded, return success
  if (
    emailResult.status === "fulfilled" ||
    sheetResult.status === "fulfilled"
  ) {
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ error: "Both channels failed" }, { status: 500 });
}