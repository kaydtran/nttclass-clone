import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    // In a real app, this would check against a database or Google Sheets
    // For demo purposes:
    if (username === 'admin' && password === 'admin123') {
      return NextResponse.json({
        success: true,
        user: { username: 'admin', role: 'admin' },
        token: 'demo-token-123'
      });
    }

    return NextResponse.json(
      { success: false, error: 'Invalid credentials' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Server error' },
      { status: 500 }
    );
  }
}
