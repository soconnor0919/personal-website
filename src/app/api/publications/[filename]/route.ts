import { NextRequest, NextResponse } from "next/server";
import { track } from "@vercel/analytics/server";
import { parseBibtex } from "~/lib/bibtex";
import { readFile } from "fs/promises";
import { join } from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: { filename: string } },
) {
  const filename = params.filename;

  // Validate filename to prevent path traversal
  if (!filename || filename.includes("..") || !filename.endsWith(".pdf")) {
    return new NextResponse("Invalid filename", { status: 400 });
  }

  try {
    // Read the BibTeX file to get publication metadata
    const bibtexPath = join(process.cwd(), "public", "publications.bib");
    const bibtexContent = await readFile(bibtexPath, "utf-8");
    const publications = parseBibtex(bibtexContent);

    // Find the publication that matches this PDF
    const publication = publications.find(
      (pub) =>
        pub.paperUrl?.includes(filename) || pub.posterUrl?.includes(filename),
    );

    // Track the PDF access
    if (publication) {
      const isPoster = publication.posterUrl?.includes(filename);

      await track("Publication PDF Access", {
        title: publication.title,
        type: publication.type,
        year: publication.year.toString(),
        pdf_type: isPoster ? "poster" : "paper",
        citation_key: publication.citationKey || "",
        venue: publication.venue || "",
        access_method: "direct_url",
        filename: filename,
      });
    } else {
      // Track unknown PDF access
      await track("Unknown PDF Access", {
        filename: filename,
        access_method: "direct_url",
      });
    }

    // Serve the PDF file
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

    // Track the error
    await track("PDF Access Error", {
      filename: filename,
      error: error instanceof Error ? error.message : "Unknown error",
    });

    return new NextResponse("PDF not found", { status: 404 });
  }
}
