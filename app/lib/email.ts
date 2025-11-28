import nodemailer from 'nodemailer';

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail(data: EmailData): Promise<{ success: boolean; error?: string }> {
  // Use the correct nodemailer API and explicit SMTP settings
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465, // SSL
    secure: true,
    auth: {
      user: process.env.EMAIL_USER as string,
      pass: process.env.EMAIL_PASS as string,
    },
    // Keep timeouts short so we don't hang the request in dev
    connectionTimeout: 15_000, // 15s to establish connection
    greetingTimeout: 10_000,   // 10s waiting for greeting
    socketTimeout: 20_000,     // 20s overall socket inactivity
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    replyTo: data.email,
    to: 'royaldecorzz.events@gmail.com',
    subject: `New Contact Form Submission from ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #5a1d56; border-bottom: 2px solid #5a1d56; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        <div style="margin: 20px 0;">
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
            ${data.message}
          </p>
        </div>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px;">
            This email was sent from the Royal Decorzz contact form.
          </p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.verify(); // fail fast if auth/connection is bad
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    // ECONNRESET / aborted or Gmail blocks -> surface a friendly error
    const msg = (error as Error)?.message || 'Failed to send email';
    return { success: false, error: msg };
  }
}
