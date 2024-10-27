import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  try {
    const cvPath = path.join(process.cwd(), 'cv.tex');
    const cvContent = await fs.readFile(cvPath, 'utf8');
    
    return NextResponse.json({ content: cvContent });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load CV' }, { status: 500 });
  }
}