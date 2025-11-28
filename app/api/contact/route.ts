import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail } from '../../lib/email';
console.log(`[API] Imported sendContactEmail from ../../lib/email`);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log(`[API] Received POST body:`, body);
    const { name, email, message } = body;

    if (!name || !email || !message) {
      console.log(`[API] Missing required fields. name: ${name}, email: ${email}, message: ${message}`);
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const result = await sendContactEmail({ name, email, message });
    console.log(`[API] sendContactEmail result:`, result);

    if (result.success) {
      console.log(`[API] Email sent successfully`);
      return NextResponse.json(
        { message: 'Email sent successfully' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: result.error || 'Failed to send email' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('API error:', error);
    console.log(`[API] Caught error in POST handler:`, error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
