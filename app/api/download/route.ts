import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Read the PDF file
    const pdfPath = join(process.cwd(), 'public', 'AI-Decision-Framework-Lewkai.pdf');
    const pdfBuffer = readFileSync(pdfPath);

    // Send email with PDF attachment
    const { data, error } = await resend.emails.send({
      from: 'Lewkai <hello@lewkai.com>',
      to: email,
      subject: 'Your AI Decision Framework from Lewkai',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="font-size: 24px; font-weight: 600; color: #1A1A1A; margin-bottom: 24px;">
            ${name ? `Hi ${name},` : 'Hi,'}
          </h1>

          <p style="font-size: 16px; line-height: 1.6; color: #4B5563; margin-bottom: 16px;">
            Thank you for downloading the AI Decision Framework.
          </p>

          <p style="font-size: 16px; line-height: 1.6; color: #4B5563; margin-bottom: 16px;">
            This one-page checklist is designed to help you evaluate any AI investment before committing resources.
            It's based on our Six Pillars of AI Velocity — a strategic system for navigating AI transformation with discipline.
          </p>

          <p style="font-size: 16px; line-height: 1.6; color: #4B5563; margin-bottom: 24px;">
            Your PDF is attached to this email.
          </p>

          <div style="background: #F8FAFC; border: 1px solid #E5E7EB; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
            <p style="font-size: 14px; color: #6B7280; margin: 0;">
              <strong style="color: #1A1A1A;">How to use it:</strong><br>
              Run every AI adoption decision through this checklist. If you can't answer a question confidently, investigate before proceeding.
            </p>
          </div>

          <p style="font-size: 16px; line-height: 1.6; color: #4B5563; margin-bottom: 8px;">
            If you'd like to discuss how we can help your organisation navigate AI velocity, reply to this email.
          </p>

          <p style="font-size: 16px; line-height: 1.6; color: #4B5563; margin-bottom: 32px;">
            <em>Discipline is the advantage.</em>
          </p>

          <div style="border-top: 1px solid #E5E7EB; padding-top: 24px;">
            <p style="font-size: 14px; color: #6B7280; margin: 0;">
              <strong style="color: #1A1A1A;">Lewkai</strong><br>
              Cape Town, South Africa<br>
              <a href="https://lewkai.com" style="color: #1a56db;">lewkai.com</a>
            </p>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: 'AI-Decision-Framework-Lewkai.pdf',
          content: pdfBuffer.toString('base64'),
        },
      ],
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
