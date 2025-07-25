import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";
import { Badge } from "~/components/ui/badge";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";
import { Download } from "lucide-react";
import Link from "next/link";

export interface CVTabsProps {
  cvUrl: string;
  resumeUrl: string;
}

export function CVTabs({ cvUrl, resumeUrl }: CVTabsProps) {
  const [activeTab, setActiveTab] = React.useState("cv");

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList>
        <TabsTrigger value="cv">CV</TabsTrigger>
        <TabsTrigger value="resume">Resume</TabsTrigger>
      </TabsList>

      <TabsContent value="cv">
        <div className="overflow-hidden rounded-lg bg-background shadow-sm">
          <iframe
            src={`https://docs.google.com/viewer?url=${encodeURIComponent(cvUrl)}&embedded=true`}
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
                    href={cvUrl}
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
            src={`https://docs.google.com/viewer?url=${encodeURIComponent(resumeUrl)}&embedded=true`}
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
                    href={resumeUrl}
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
  );
}

export default CVTabs;
