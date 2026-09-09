import { NextResponse } from 'next/server';
import { GAS_API_URL } from '@/lib/constants';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get('action');

  if (!GAS_API_URL) {
    return NextResponse.json({ success: false, error: 'Google Apps Script URL is not configured' });
  }

  try {
    const url = `${GAS_API_URL}?action=${action}`;
    const response = await fetch(url);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error proxying GET to GAS:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch data' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  if (!GAS_API_URL) {
    return NextResponse.json({ success: false, error: 'Google Apps Script URL is not configured' });
  }

  try {
    const body = await request.json();
    
    // Convert body to url-encoded format for GAS doPost compatibility
    const params = new URLSearchParams();
    Object.keys(body).forEach(key => {
      params.append(key, typeof body[key] === 'object' ? JSON.stringify(body[key]) : String(body[key]));
    });

    const response = await fetch(GAS_API_URL, {
      method: 'POST',
      body: params,
    });
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error proxying POST to GAS:', error);
    return NextResponse.json({ success: false, error: 'Failed to submit data' }, { status: 500 });
  }
}
