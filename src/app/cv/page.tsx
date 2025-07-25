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
import { Download, FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { PageLayout } from "~/components/layout/PageLayout";
import { PageContentSkeleton } from "~/components/layout/PageLayoutSkeleton";

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
        title: "Curriculum Vitae",
        description: (
          <>
            My academic and professional experience in computer science,
            robotics, and engineering.
          </>
        ),
        action: (
          <Button asChild variant="default" size="sm">
            <Link href={CV_URL} target="_blank" rel="noopener noreferrer">
              <Download className="mr-1 h-4 w-4" />
              Download CV
            </Link>
          </Button>
        ),
      }}
    >
      <Suspense
        fallback={
          <div>
            <PageContentSkeleton />
          </div>
        }
      >
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="cv">CV</TabsTrigger>
            <TabsTrigger value="resume">Resume</TabsTrigger>
          </TabsList>

          <TabsContent value="cv">
            <div className="overflow-hidden rounded-lg bg-background shadow-sm">
              <iframe
                src={`https://docs.google.com/viewer?url=${encodeURIComponent(CV_URL)}&embedded=true`}
                width="100%"
                height="600"
                style={{ border: "none" }}
                className="h-[calc(100vh-21rem)] w-full lg:h-[calc(100vh-18rem)]"
              >
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle>PDF Preview Not Supported</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      Your browser doesn&apos;t support PDF preview.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Link
                        href={CV_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Badge variant="secondary" className="capitalize">
                          <Download className="h-4 w-4" />
                          Download CV
                        </Badge>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </iframe>
            </div>
          </TabsContent>

          <TabsContent value="resume">
            <div className="overflow-hidden rounded-lg bg-background shadow-sm">
              <iframe
                src={`https://docs.google.com/viewer?url=${encodeURIComponent(RESUME_URL)}&embedded=true`}
                width="100%"
                height="600"
                style={{ border: "none" }}
                className="h-[calc(100vh-21rem)] w-full lg:h-[calc(100vh-18rem)]"
              >
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle>PDF Preview Not Supported</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      Your browser doesn&apos;t support PDF preview.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Link
                        href={RESUME_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Badge variant="secondary" className="capitalize">
                          <Download className="h-4 w-4" />
                          Download Resume
                        </Badge>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </iframe>
            </div>
          </TabsContent>
        </Tabs>
      </Suspense>
    </PageLayout>
  );
}
