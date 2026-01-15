import { NextRequest, NextResponse } from "next/server";

interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  projectDetails: string;
  timeline?: string;
  budget?: string;
}

interface FileAttachment {
  filename: string;
  content: Buffer;
}

// File upload limits
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB per file
const MAX_TOTAL_SIZE = 25 * 1024 * 1024; // 25MB total
const MAX_FILES = 10;
const ALLOWED_MIME_TYPES = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/webp',
  'image/svg+xml',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.ms-powerpoint',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
];

// Get recipient email from environment variable, fallback to default
const getRecipientEmail = () => {
  return process.env.QUOTE_RECIPIENT_EMAIL || process.env.CONTACT_EMAIL || "info@verlux.com";
};

// Email template
const createEmailHTML = (body: QuoteRequest, attachmentCount: number = 0) => {
  const formatBudget = (budget?: string) => {
    if (!budget) return "Not specified";
    const budgetMap: Record<string, string> = {
      "under-10k": "Under $10,000",
      "10k-25k": "$10,000 - $25,000",
      "25k-50k": "$25,000 - $50,000",
      "50k-100k": "$50,000 - $100,000",
      "over-100k": "Over $100,000",
    };
    return budgetMap[budget] || budget;
  };

  const formatTimeline = (timeline?: string) => {
    if (!timeline) return "Not specified";
    const timelineMap: Record<string, string> = {
      "asap": "As soon as possible",
      "1-3months": "1-3 months",
      "3-6months": "3-6 months",
      "6-12months": "6-12 months",
      "planning": "Just planning",
    };
    return timelineMap[timeline] || timeline;
  };

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Quote Request - Verlux Construction</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #0d9488 0%, #06b6d4 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 28px;">New Quote Request</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">Verlux Construction</p>
        </div>
        
        <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
          <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <h2 style="color: #0d9488; margin-top: 0; font-size: 20px; border-bottom: 2px solid #0d9488; padding-bottom: 10px;">Contact Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 120px;">Name:</td>
                <td style="padding: 8px 0;">${body.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${body.email}" style="color: #0d9488; text-decoration: none;">${body.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
                <td style="padding: 8px 0;"><a href="tel:${body.phone}" style="color: #0d9488; text-decoration: none;">${body.phone}</a></td>
              </tr>
            </table>
          </div>

          <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <h2 style="color: #0d9488; margin-top: 0; font-size: 20px; border-bottom: 2px solid #0d9488; padding-bottom: 10px;">Project Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 120px;">Project Type:</td>
                <td style="padding: 8px 0;">${body.projectType}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Description:</td>
                <td style="padding: 8px 0;">${body.projectDetails.replace(/\n/g, '<br>')}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Timeline:</td>
                <td style="padding: 8px 0;">${formatTimeline(body.timeline)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Budget:</td>
                <td style="padding: 8px 0;">${formatBudget(body.budget)}</td>
              </tr>
              ${attachmentCount > 0 ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Attachments:</td>
                <td style="padding: 8px 0;">${attachmentCount} file${attachmentCount !== 1 ? 's' : ''} attached</td>
              </tr>
              ` : ''}
            </table>
          </div>

          <div style="background: #f0fdfa; padding: 15px; border-radius: 8px; border-left: 4px solid #0d9488;">
            <p style="margin: 0; color: #065f46; font-size: 14px;">
              <strong>Submitted:</strong> ${new Date().toLocaleString('en-US', { 
                dateStyle: 'long', 
                timeStyle: 'short',
                timeZone: 'America/Toronto'
              })}
            </p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
            <a href="mailto:${body.email}" style="display: inline-block; background: #0d9488; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; margin-right: 10px;">Reply to Client</a>
            <a href="tel:${body.phone}" style="display: inline-block; background: #06b6d4; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">Call Client</a>
          </div>
        </div>

        <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px;">
          <p>This email was sent from the Verlux Construction quote request form.</p>
        </div>
      </body>
    </html>
  `;
};

const createEmailText = (body: QuoteRequest, attachmentCount: number = 0) => {
  return `
New Quote Request - Verlux Construction

Contact Information:
- Name: ${body.name}
- Email: ${body.email}
- Phone: ${body.phone}

Project Details:
- Project Type: ${body.projectType}
- Description: ${body.projectDetails}
- Timeline: ${body.timeline || "Not specified"}
- Budget: ${body.budget || "Not specified"}
${attachmentCount > 0 ? `- Attachments: ${attachmentCount} file${attachmentCount !== 1 ? 's' : ''} attached` : ''}

Submitted: ${new Date().toLocaleString('en-US', {
  dateStyle: 'long',
  timeStyle: 'short',
  timeZone: 'America/Toronto'
})}
  `.trim();
};

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Extract form fields
    const body: QuoteRequest = {
      name: formData.get('name') as string || '',
      email: formData.get('email') as string || '',
      phone: formData.get('phone') as string || '',
      projectType: formData.get('projectType') as string || '',
      projectDetails: formData.get('projectDetails') as string || '',
      timeline: formData.get('timeline') as string || undefined,
      budget: formData.get('budget') as string || undefined,
    };

    // Extract files
    const files = formData.getAll('files') as File[];
    const attachments: FileAttachment[] = [];

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.projectType || !body.projectDetails) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate and process files
    if (files.length > 0) {
      if (files.length > MAX_FILES) {
        return NextResponse.json(
          { error: `Maximum ${MAX_FILES} files allowed` },
          { status: 400 }
        );
      }

      let totalSize = 0;
      for (const file of files) {
        if (file.size > MAX_FILE_SIZE) {
          return NextResponse.json(
            { error: `File "${file.name}" exceeds 10MB limit` },
            { status: 400 }
          );
        }

        if (!ALLOWED_MIME_TYPES.includes(file.type)) {
          return NextResponse.json(
            { error: `File type not allowed: ${file.name}` },
            { status: 400 }
          );
        }

        totalSize += file.size;
      }

      if (totalSize > MAX_TOTAL_SIZE) {
        return NextResponse.json(
          { error: "Total file size exceeds 25MB limit" },
          { status: 400 }
        );
      }

      // Convert files to attachments
      for (const file of files) {
        const buffer = Buffer.from(await file.arrayBuffer());
        attachments.push({
          filename: file.name,
          content: buffer,
        });
      }
    }

    // Get recipient email from environment variable
    const recipientEmail = getRecipientEmail();

    // Try to send email using Resend if API key is available
    let emailSent = false;
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL || "Verlux Construction <noreply@verlux.com>",
          to: recipientEmail,
          replyTo: body.email,
          subject: `New Quote Request: ${body.projectType} - ${body.name}`,
          html: createEmailHTML(body, attachments.length),
          text: createEmailText(body, attachments.length),
          attachments: attachments.length > 0 ? attachments : undefined,
        });

        emailSent = true;
        console.log(`Email sent successfully to ${recipientEmail} with ${attachments.length} attachment(s)`);
      } catch (emailError) {
        console.error("Error sending email via Resend:", emailError);
        // Fall through to alternative method
      }
    }

    // Alternative: Use mailto link approach or log for manual sending
    if (!emailSent) {
      // Log the quote request for manual processing
      console.log("Quote request received (email not sent - configure RESEND_API_KEY):", {
        name: body.name,
        email: body.email,
        phone: body.phone,
        projectType: body.projectType,
        projectDetails: body.projectDetails,
        timeline: body.timeline || "Not specified",
        budget: body.budget || "Not specified",
        attachments: attachments.length,
        timestamp: new Date().toISOString(),
        recipientEmail,
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Quote request submitted successfully",
        emailSent,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing quote request:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        message: error instanceof Error ? error.message : "An unexpected error occurred",
      },
      { status: 500 }
    );
  }
}

