"use client";

import React, { Suspense, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";
import { Badge } from "~/components/ui/badge";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";
import {
  Download,
  FileText,
  ExternalLink,
  Github,
  Zap,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { PageLayout } from "~/components/layout/PageLayout";

// GitHub release URLs for PDFs
const CV_URL =
  "https://github.com/soconnor0919/resume-cv/releases/download/latest/cv.pdf";
const RESUME_URL =
  "https://github.com/soconnor0919/resume-cv/releases/download/latest/resume.pdf";

export default function CVPage() {
  const [activeTab, setActiveTab] = useState("cv");

  return (
    <PageLayout
      headerProps={{
        title: "Resume & CV",
        description:
          "Academic and professional experience, compiled with LaTeX and automatically updated through GitHub Actions.",
        icon: <FileText className="h-5 w-5" />,
      }}
    >
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-6"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="cv">CV</TabsTrigger>
            <TabsTrigger value="resume">Resume</TabsTrigger>
          </TabsList>

          <div className="flex gap-2">
            <Button asChild variant="outline" size="sm">
              <Link
                href={activeTab === "cv" ? CV_URL : RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-1 h-4 w-4" />
                Download PDF
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link
                href="https://github.com/soconnor0919/resume-cv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-1 h-4 w-4" />
                Source
              </Link>
            </Button>
          </div>
        </div>

        <TabsContent value="cv" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Academic Curriculum Vitae
                  </CardTitle>
                  <CardDescription>
                    Comprehensive academic and research experience
                  </CardDescription>
                </div>
                <Badge variant="secondary">LaTeX Generated</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border bg-muted/30 p-1">
                <iframe
                  src={`https://docs.google.com/viewer?url=${encodeURIComponent(CV_URL)}&embedded=true`}
                  width="100%"
                  height="800"
                  style={{ border: "none" }}
                  className="h-[800px] w-full rounded-md"
                  title="Academic CV PDF Preview"
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button asChild size="sm">
                  <Link href={CV_URL} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-1 h-4 w-4" />
                    Open in New Tab
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href={CV_URL} download>
                    <Download className="mr-1 h-4 w-4" />
                    Download CV
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resume" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Industry Resume
                  </CardTitle>
                  <CardDescription>
                    Focused professional experience for industry roles
                  </CardDescription>
                </div>
                <Badge variant="secondary">LaTeX Generated</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border bg-muted/30 p-1">
                <iframe
                  src={`https://docs.google.com/viewer?url=${encodeURIComponent(RESUME_URL)}&embedded=true`}
                  width="100%"
                  height="800"
                  style={{ border: "none" }}
                  className="h-[800px] w-full rounded-md"
                  title="Industry Resume PDF Preview"
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button asChild size="sm">
                  <Link
                    href={RESUME_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-1 h-4 w-4" />
                    Open in New Tab
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href={RESUME_URL} download>
                    <Download className="mr-1 h-4 w-4" />
                    Download Resume
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
}
