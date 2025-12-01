"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";

import {
  Download,
  ExternalLink,
  FileText,
  ZoomIn,
  ZoomOut,
  RotateCw,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
  Loader2,
  Maximize2,
  Minimize2,
  Eye,
} from "lucide-react";
import Link from "next/link";
import type { PDFDocumentProxy, PDFPageProxy } from "pdfjs-dist";

// Local PDF file URLs
const CV_URL = "/publications/cv.pdf";
const RESUME_URL = "/publications/resume.pdf";

interface PDFViewerProps {
  url: string;
  title: string;
  type: "cv" | "resume";
}

function PDFViewer({ url, title, type }: PDFViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pdfDoc, setPdfDoc] = useState<PDFDocumentProxy | null>(null);
  const [pageNum, setPageNum] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [scale, setScale] = useState(1.2);
  const [rotation, setRotation] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [pdfBlob, setPdfBlob] = useState<Uint8Array | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Download PDF and convert to blob for PDF.js
  const downloadPDF = async (pdfUrl: string): Promise<Uint8Array> => {
    try {
      // Try direct fetch first
      const response = await fetch(pdfUrl, {
        mode: "cors",
        headers: {
          Accept: "application/pdf",
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to download PDF: ${response.status}`);
      }

      const arrayBuffer = await response.arrayBuffer();
      return new Uint8Array(arrayBuffer);
    } catch (error) {
      console.error("Failed to download PDF:", error);
      throw error;
    }
  };

  useEffect(() => {
    if (!isClient) return;

    const loadPDF = async () => {
      try {
        setIsLoading(true);
        setHasError(false);

        // Download the PDF first
        const pdfData = await downloadPDF(url);
        setPdfBlob(pdfData);

        // Dynamically import PDF.js
        const pdfjsLib = await import("pdfjs-dist");

        // Set worker path
        pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

        // Load PDF from the downloaded data
        const loadingTask = pdfjsLib.getDocument({ data: pdfData });
        const pdf = await loadingTask.promise;
        setPdfDoc(pdf);
        setPageCount(pdf.numPages);
        setPageNum(1);
      } catch (error) {
        console.error("Error loading PDF:", error);
        setHasError(true);
        setErrorMessage(
          error instanceof Error
            ? error.message
            : "Failed to load PDF. Please try downloading it directly.",
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadPDF();
  }, [url, isClient]);

  useEffect(() => {
    const renderPage = async () => {
      if (!pdfDoc || !canvasRef.current) return;

      try {
        const page: PDFPageProxy = await pdfDoc.getPage(pageNum);
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        if (!context) return;

        // Get container width for responsive scaling
        const container = canvas.parentElement;
        const containerWidth = container
          ? container.clientWidth - 32
          : window.innerWidth - 32; // Account for padding

        // Calculate responsive scale
        const baseViewport = page.getViewport({ scale: 1, rotation });
        const responsiveScale = Math.min(
          containerWidth / baseViewport.width,
          scale,
        );

        const viewport = page.getViewport({ scale: responsiveScale, rotation });

        // Fix blurriness by using device pixel ratio
        const devicePixelRatio = window.devicePixelRatio || 1;
        const outputScale = devicePixelRatio;

        canvas.width = Math.floor(viewport.width * outputScale);
        canvas.height = Math.floor(viewport.height * outputScale);
        canvas.style.width = Math.floor(viewport.width) + "px";
        canvas.style.height = Math.floor(viewport.height) + "px";

        // Enable anti-aliasing and smoothing
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = "high";

        const transform =
          outputScale !== 1
            ? [outputScale, 0, 0, outputScale, 0, 0]
            : undefined;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
          transform: transform,
        };

        await page.render(renderContext).promise;
      } catch (error) {
        console.error("Error rendering page:", error);
        setHasError(true);
        setErrorMessage("Failed to render PDF page.");
      }
    };

    renderPage();
  }, [pdfDoc, pageNum, scale, rotation]);

  const nextPage = () => {
    if (pageNum < pageCount) {
      setPageNum(pageNum + 1);
    }
  };

  const prevPage = () => {
    if (pageNum > 1) {
      setPageNum(pageNum - 1);
    }
  };

  const zoomIn = () => {
    if (scale < 3) {
      setScale(scale + 0.2);
    }
  };

  const zoomOut = () => {
    if (scale > 0.5) {
      setScale(scale - 0.2);
    }
  };

  const rotate = () => {
    setRotation((rotation + 90) % 360);
  };

  const downloadBlob = () => {
    if (!pdfBlob) return;

    const blob = new Blob([pdfBlob as BlobPart], { type: "application/pdf" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${title.toLowerCase().replace(/\s+/g, "_")}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  if (!isClient) {
    return (
      <div className="space-y-4">
        {/* Action Bar */}
        <div className="flex items-center justify-between gap-4 rounded-lg border bg-muted/50 p-4">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-muted-foreground" />
            <div>
              <h3 className="font-medium">{title}</h3>
              <p className="text-sm text-muted-foreground">
                {type === "cv"
                  ? "Academic curriculum vitae"
                  : "Professional resume"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2" disabled>
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Download</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-2" disabled>
              <ExternalLink className="h-4 w-4" />
              <span className="hidden sm:inline">Open</span>
            </Button>
          </div>
        </div>

        {/* Loading State */}
        <div className="relative overflow-hidden rounded-lg border bg-background">
          <div className="flex justify-center p-4">
            <div className="h-[600px] w-full max-w-2xl animate-pulse rounded-lg bg-muted lg:h-[800px]" />
          </div>
        </div>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="space-y-4">
        {/* Action Bar */}
        <div className="flex items-center justify-between gap-4 rounded-lg border bg-muted/50 p-4">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-muted-foreground" />
            <h3 className="font-medium">{title}</h3>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="button-hover gap-2"
              onClick={pdfBlob ? downloadBlob : undefined}
              disabled={!pdfBlob}
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Download</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="button-hover gap-2"
            >
              <Link href={url} target="_blank" rel="noopener noreferrer">
                <Eye className="h-4 w-4" />
                <span className="hidden sm:inline">View PDF</span>
              </Link>
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-destructive" />
              <CardTitle className="text-base">Unable to load PDF</CardTitle>
            </div>
            <CardDescription>{errorMessage}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                className="button-hover gap-2"
                onClick={pdfBlob ? downloadBlob : undefined}
                disabled={!pdfBlob}
              >
                <Download className="h-4 w-4" />
                <span className="hidden sm:inline">Download {title}</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="button-hover gap-2"
              >
                <Link href={url} target="_blank" rel="noopener noreferrer">
                  <Eye className="h-4 w-4" />
                  <span className="hidden sm:inline">View PDF in New Tab</span>
                </Link>
              </Button>
            </div>
            <div className="rounded-md border border-dashed p-4 text-center">
              <p className="text-sm text-muted-foreground">
                PDF preview not available. Please use the download or open
                buttons above.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Action Bar */}
      <div className="flex items-center justify-between gap-4 rounded-lg border bg-muted/50 p-4">
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-muted-foreground" />
          <h3 className="font-medium">{title}</h3>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="button-hover gap-2"
            onClick={pdfBlob ? downloadBlob : undefined}
            disabled={!pdfBlob}
          >
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Download</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            asChild
            className="button-hover gap-2"
          >
            <Link href={url} target="_blank" rel="noopener noreferrer">
              <Eye className="h-4 w-4" />
              <span className="hidden sm:inline">View PDF</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* PDF Controls */}
      {!isLoading && pageCount > 0 && (
        <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border bg-background p-3">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={prevPage}
              disabled={pageNum <= 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm text-muted-foreground">
              {pageCount > 0 ? `${pageNum} / ${pageCount}` : "Loading..."}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={nextPage}
              disabled={pageNum >= pageCount}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={zoomOut}
              disabled={scale <= 0.5}
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <span className="text-sm text-muted-foreground">
              {Math.round(scale * 100)}%
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={zoomIn}
              disabled={scale >= 3}
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={rotate}>
              <RotateCw className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* PDF Canvas */}
      <div
        className="relative overflow-hidden rounded-lg border bg-background"
        tabIndex={0}
      >
        {isLoading && (
          <>
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/80 backdrop-blur-sm">
              <div className="flex flex-col items-center gap-2">
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
                <p className="text-sm text-muted-foreground">
                  Loading {title.toLowerCase()}...
                </p>
              </div>
            </div>
            {/* Loading Skeleton */}
            <div className="flex justify-center p-4">
              <div className="h-[600px] w-full max-w-2xl animate-pulse rounded-lg bg-muted lg:h-[800px]" />
            </div>
          </>
        )}

        <div className="flex justify-center overflow-auto p-4">
          <canvas
            ref={canvasRef}
            className="h-auto w-full max-w-4xl shadow-lg"
            style={{
              display: isLoading ? "none" : "block",
              maxWidth: "100%",
            }}
          />
        </div>
      </div>

      {/* Mobile Notice */}
      <div className="block rounded-lg border border-amber-200 bg-amber-50 p-4 md:hidden dark:border-amber-800 dark:bg-amber-950/50">
        <div className="flex items-start gap-2">
          <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
          <div>
            <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
              Better on larger screens
            </p>
            <p className="text-xs text-amber-700 dark:text-amber-300">
              For the best viewing experience, try opening this on a tablet or
              desktop. You can also download the PDF directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CVPage() {
  const [activeTab, setActiveTab] = useState("cv");

  return (
    <div className="space-y-6">
      <section className="animate-fade-in-up prose prose-zinc dark:prose-invert max-w-none">
        <div className="flex items-start gap-3">
          <FileText className="h-8 w-8 text-primary" />
          <div>
            <h1 className="mb-2 text-2xl font-bold">Curriculum Vitae</h1>
          </div>
        </div>
        <p className="mt-2 text-lg text-muted-foreground">
          My academic and professional experience in computer science, robotics,
          and engineering.
        </p>
      </section>

      <div className="animate-fade-in-up-delay-2">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList className="grid w-fit grid-cols-2">
            <TabsTrigger value="cv" className="gap-2">
              <FileText className="h-4 w-4" />
              Academic CV
            </TabsTrigger>
            <TabsTrigger value="resume" className="gap-2">
              <FileText className="h-4 w-4" />
              Resume
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cv" className="space-y-0">
            <PDFViewer url={CV_URL} title="Academic CV" type="cv" />
          </TabsContent>

          <TabsContent value="resume" className="space-y-0">
            <PDFViewer url={RESUME_URL} title="Resume" type="resume" />
          </TabsContent>
        </Tabs>
      </div>


    </div>
  );
}
