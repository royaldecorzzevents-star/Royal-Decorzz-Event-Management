import nodemailer from 'nodemailer';

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export async function sendContactEmail(data: EmailData) {
  const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  console.log(`[EMAIL] Created transporter with user: ${process.env.EMAIL_USER}`);

  const mailOptions = {
    from: process.env.EMAIL_USER,
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
  console.log(`[EMAIL] mailOptions:`, mailOptions);

  try {
    await transporter.sendMail(mailOptions);
    console.log(`[EMAIL] transporter.sendMail called`);
    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    console.log(`[EMAIL] sendMail error:`, error);
    return { success: false, error: 'Failed to send email' };
  }
}
