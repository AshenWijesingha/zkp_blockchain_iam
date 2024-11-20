import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { width: string; height: string } }
) {
  const width = parseInt(params.width);
  const height = parseInt(params.height);

  // Create SVG placeholder
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f1f5f9"/>
      <text 
        x="50%" 
        y="50%" 
        font-family="Arial" 
        font-size="20" 
        fill="#94a3b8"
        text-anchor="middle" 
        dy=".3em"
      >${width}x${height}</text>
    </svg>
  `;

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
    },
  });
}