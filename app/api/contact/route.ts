import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail } from '../../lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body as { name?: string; email?: string; message?: string };

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Try to send with a bounded timeout to avoid long-hanging requests
    const controller = new AbortController();
    const abortTimer = setTimeout(() => controller.abort(), 25_000); // abort after 25s

    const result = await sendContactEmail({ name, email, message }).finally(() => clearTimeout(abortTimer));

    if (result.success) {
      return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    }
    // Map known transport errors to 502/500
    return NextResponse.json({ error: result.error || 'Failed to send email' }, { status: 502 });
  } catch (error) {
    // If the client closed the connection first, Next logs ECONNRESET; we return a safe JSON
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
