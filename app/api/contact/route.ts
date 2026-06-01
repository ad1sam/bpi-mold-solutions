import { Resend } from "resend";
import { NextResponse } from "next/server";
import {
  getServiceLabel,
  validateContactForm,
  type ContactFormData,
} from "@/app/lib/contact";

const TO_EMAILS = [
  "adisamullarexha98@gmail.com",
  "contact@bpimoldsolutions.com",
] as const;

const FROM_EMAIL = "Website <noreply@bpimoldsolutions.com>";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailHtml(data: ContactFormData, serviceLabel: string): string {
  const rows = [
    ["Name", data.name.trim()],
    ["Phone", data.phone.trim()],
    ["Email", data.email.trim()],
    ["Service", serviceLabel],
    ["Message", data.message.trim() || "(No message provided)"],
  ];

  const tableRows = rows
    .map(
      ([label, value]) =>
        `<tr>
          <td style="padding:8px 12px;font-weight:600;color:#06164A;border-bottom:1px solid #e2e8f0;vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:8px 12px;color:#334155;border-bottom:1px solid #e2e8f0;">${escapeHtml(value)}</td>
        </tr>`
    )
    .join("");

  return `
    <div style="font-family:system-ui,sans-serif;max-width:560px;margin:0 auto;">
      <h2 style="color:#06164A;margin:0 0 16px;">New mold lead from BPI Mold Solutions</h2>
      <table style="width:100%;border-collapse:collapse;background:#f8fafc;border-radius:8px;overflow:hidden;">
        ${tableRows}
      </table>
      <p style="margin-top:16px;font-size:13px;color:#64748b;">Submitted via website contact form</p>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const body = (await request.json()) as ContactFormData;

    const data: ContactFormData = {
      name: String(body.name ?? ""),
      phone: String(body.phone ?? ""),
      email: String(body.email ?? ""),
      service: String(body.service ?? ""),
      message: String(body.message ?? ""),
    };

    const errors = validateContactForm(data);
    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { error: "Validation failed.", errors },
        { status: 400 }
      );
    }

    const serviceLabel = getServiceLabel(data.service);
    const phone = data.phone.trim();
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [...TO_EMAILS],
      replyTo: data.email.trim(),
      subject: `🚨 New Mold Lead - ${phone}`,
      html: buildEmailHtml(data, serviceLabel),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again or call us directly." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
