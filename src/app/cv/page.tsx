'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '~/components/ui/tabs';
import { Badge } from '~/components/ui/badge';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '~/components/ui/card';
import { Download } from 'lucide-react';
import Link from 'next/link';

// GitHub release URLs for PDFs
const CV_URL = "https://github.com/soconnor0919/resume-cv/releases/download/latest/cv.pdf";
const RESUME_URL = "https://github.com/soconnor0919/resume-cv/releases/download/latest/resume.pdf";

export default function CVPage() {
  const [activeTab, setActiveTab] = useState('cv');

  return (
    <div className="space-y-6">
      <section className="prose prose-zinc dark:prose-invert max-w-none">
        <h1 className="text-2xl font-bold">Curriculum Vitae 📄</h1>
        <p className="text-lg text-muted-foreground mt-2">
          My academic and professional experience in computer science, robotics, and engineering.
        </p>
      </section>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="cv">CV</TabsTrigger>
          <TabsTrigger value="resume">Resume</TabsTrigger>
        </TabsList>

        <TabsContent value="cv">
          <div className="bg-background shadow-sm rounded-lg overflow-hidden">
            <iframe
              src={`https://docs.google.com/viewer?url=${encodeURIComponent(CV_URL)}&embedded=true`}
              width="100%"
              height="600"
              style={{ border: 'none' }}
              className="w-full h-[calc(100vh-21rem)] lg:h-[calc(100vh-18rem)]"
            >
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle>PDF Preview Not Supported</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Your browser doesn't support PDF preview.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mt-2">
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
          <div className="bg-background shadow-sm rounded-lg overflow-hidden">
            <iframe
              src={`https://docs.google.com/viewer?url=${encodeURIComponent(RESUME_URL)}&embedded=true`}
              width="100%"
              height="600"
              style={{ border: 'none' }}
              className="w-full h-[calc(100vh-21rem)] lg:h-[calc(100vh-18rem)]"
            >
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle>PDF Preview Not Supported</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    Your browser doesn't support PDF preview.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mt-2">
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
    </div>
  );
}
