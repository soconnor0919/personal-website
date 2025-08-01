import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json(
      {
        error: "URL parameter is required",
        usage: "Add ?url=<github-release-url> to test the proxy",
        example:
          "/api/pdf-proxy?url=https://github.com/user/repo/releases/download/latest/file.pdf",
      },
      { status: 400 },
    );
  }

  // Validate that the URL is from GitHub releases
  if (!url.includes("github.com") || !url.includes("/releases/download/")) {
    return NextResponse.json(
      { error: "Only GitHub release URLs are allowed" },
      { status: 403 },
    );
  }

  try {
    // Follow redirects and fetch the actual file
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; PDF-Proxy/1.0)",
        Accept: "application/pdf,*/*",
      },
      redirect: "follow", // Follow redirects
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch PDF: ${response.status}` },
        { status: response.status },
      );
    }

    // Get the response buffer first
    const pdfBuffer = await response.arrayBuffer();

    // Check if it's actually a PDF by looking at the file signature
    const uint8Array = new Uint8Array(pdfBuffer);

    // More robust PDF signature check
    const firstBytes = Array.from(uint8Array.slice(0, 10));
    const pdfSignature = String.fromCharCode(...uint8Array.slice(0, 4));
    const extendedSignature = String.fromCharCode(...uint8Array.slice(0, 8));

    // Only log in development
    if (process.env.NODE_ENV === "development") {
      console.log("PDF proxy - URL:", response.url);
      console.log("PDF proxy - Size:", pdfBuffer.byteLength, "bytes");
      console.log("PDF proxy - Signature:", JSON.stringify(pdfSignature));
    }

    // Check for PDF signature - should start with "%PDF"
    const isPDF =
      pdfSignature === "%PDF" ||
      (uint8Array[0] === 0x25 && // %
        uint8Array[1] === 0x50 && // P
        uint8Array[2] === 0x44 && // D
        uint8Array[3] === 0x46); // F

    if (!isPDF) {
      console.error(
        "PDF proxy - Invalid signature:",
        JSON.stringify(pdfSignature),
      );
      return NextResponse.json(
        {
          error: `Resource is not a valid PDF file. Got signature: ${JSON.stringify(pdfSignature)}`,
          debug: {
            signature: pdfSignature,
            firstBytes: firstBytes.slice(0, 4),
            size: pdfBuffer.byteLength,
          },
        },
        { status: 400 },
      );
    }

    // Also check content-type as secondary validation (but be more lenient)
    const contentType = response.headers.get("content-type");

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Length": pdfBuffer.byteLength.toString(),
        "Cache-Control": "public, max-age=7200", // Cache for 2 hours
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Disposition": "inline", // Display in browser instead of download
      },
    });
  } catch (error) {
    console.error("PDF proxy error:", error);
    return NextResponse.json({ error: "Failed to proxy PDF" }, { status: 500 });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
