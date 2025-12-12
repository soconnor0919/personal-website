import { type NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ filename: string }> },
) {
  const { filename } = await context.params;

  // Validate filename to prevent path traversal
  if (!filename || filename.includes("..") || !filename.endsWith(".pdf")) {
    return new NextResponse("Invalid filename", { status: 400 });
  }

  try {
    // Serve the PDF file directly - Vercel Analytics will automatically track the route access
    const pdfPath = join(process.cwd(), "public", "publications", filename);
    const pdfBuffer = await readFile(pdfPath);

    return new NextResponse(new Uint8Array(pdfBuffer), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${filename}"`,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("Error serving PDF:", error);
    return new NextResponse("PDF not found", { status: 404 });
  }
}
