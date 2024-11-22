import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Email to the client
    const clientMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Welcome!',
      text: `Hi ${name},\n\nThanks for reaching out! I'm looking foward to working with you. You can view your welcome package here: https://zest-can-b2c.notion.site/Hey-there-I-m-so-glad-you-reached-out-140d35dca0c0800786ecee0be4fc97a8\n\nI'll be in touch soon.`,
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for reaching out! I'm looking foward to working with you. You can view your welcome package here:</p>
        <p><a href="https://zest-can-b2c.notion.site/Hey-there-I-m-so-glad-you-reached-out-140d35dca0c0800786ecee0be4fc97a8" target="_blank">Welcome Package</a></p>
        <p>I'll be in touch soon.</p>
      `,
    };

    // Email to yourself (admin)
    const adminMailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to your own email
      subject: 'New Form Submission',
      text: `New form submission from ${name} (${email}):\n\nMessage: ${message}`,
      html: `
        <p><strong>New Form Submission:</strong></p>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(clientMailOptions),
      transporter.sendMail(adminMailOptions)
    ]);

    return NextResponse.json({ message: 'Emails sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending emails:', error);
    return NextResponse.json({ error: 'Failed to send emails' }, { status: 500 });
  }
}