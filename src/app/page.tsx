"use client";

import * as React from "react";
import {
  ArrowUpRight,
  Code,
  FlaskConical,
  Users,
  Folder,
  Trophy,
  Star,
  Zap,
  BookOpen,
  Award,
  TrendingUp,
  FileText,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { projects, name, achievements, experience } from "~/lib/data";
import { Button } from "~/components/ui/button";
import { PageLayout } from "~/components/layout/PageLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";

export default function HomePage() {
  return (
    <div className="flex w-full flex-col gap-6">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 p-8 md:p-12">
        <div className="relative z-10">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
              <Code className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold md:text-4xl">
                Hi! I&apos;m {name[0]?.first}
              </h1>
              <p className="text-lg text-muted-foreground">
                CS&E student who loves building cool stuff
              </p>
            </div>
          </div>
          <p className="mb-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Hey there! I&apos;m a Computer Science and Engineering student at
            Bucknell University. I love building things that work—whether
            that&apos;s robots, websites, or tools that help people solve real
            problems. When I&apos;m not coding, you might find me at a racing
            track (I work for a local speedway!) or exploring new places with my
            camera.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/projects" className="flex items-center gap-2">
                <Folder className="h-4 w-4" />
                View My Work
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/cv" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                My Resume
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link
                href="mailto:sean@soconnor.dev"
                className="flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
        {/* Background decoration */}
        <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/5" />
        <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-primary/5" />
      </div>

      <PageLayout
        headerProps={{
          title: "Recent Highlights",
          description: "A glimpse into my latest work and achievements",
        }}
      >
        {/* Quick Highlights */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="blue-card rounded-xl border border-blue-300 bg-blue-100 p-4 shadow">
            <div className="flex items-center gap-2 text-blue-800">
              <Award className="h-5 w-5" />
              <span className="font-semibold">Published Researcher</span>
            </div>
            <p className="mt-1 text-sm text-blue-700">
              IEEE RO-MAN 2024 & 2025
            </p>
          </div>

          <div className="green-card rounded-xl border border-green-300 bg-green-100 p-4 shadow">
            <div className="flex items-center gap-2 text-green-800">
              <TrendingUp className="h-5 w-5" />
              <span className="font-semibold">Dean&apos;s List</span>
            </div>
            <p className="mt-1 text-sm text-green-700">
              5 Semesters • Academic Excellence
            </p>
          </div>

          <div className="purple-card rounded-xl border border-purple-300 bg-purple-100 p-4 shadow">
            <div className="flex items-center gap-2 text-purple-800">
              <Zap className="h-5 w-5" />
              <span className="font-semibold">1500+ Users</span>
            </div>
            <p className="mt-1 text-sm text-purple-700">
              Real-time platform engagement
            </p>
          </div>
        </div>
        {/* Recent Experience Highlights */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                <CardTitle>What I&apos;ve Been Up To</CardTitle>
              </div>
              <Button asChild variant="outline" size="sm">
                <Link href="/cv" className="flex items-center gap-1">
                  Full CV
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {experience.slice(0, 2).map((exp, index) => (
              <div key={index} className="border-l-2 border-primary/20 pl-4">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold">{exp.title}</h3>
                  <Badge variant="secondary">{exp.company}</Badge>
                  <span className="text-sm text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {exp.highlights.slice(0, 2).map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-0.5 text-primary">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                <CardTitle>Technical Stack</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <h4 className="mb-2 font-medium">Programming Languages</h4>
                <div className="flex flex-wrap gap-1">
                  {[
                    "Java",
                    "C/C++",
                    "Python",
                    "TypeScript",
                    "JavaScript",
                    "PHP",
                  ].map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="mb-2 font-medium">
                  Frameworks &amp; Infrastructure
                </h4>
                <div className="flex flex-wrap gap-1">
                  {["React", "Next.js", "ROS2", "Docker", "Linux"].map(
                    (tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ),
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <FlaskConical className="h-5 w-5" />
                <CardTitle>Research & Leading the Charge</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-start gap-2 text-sm">
                <BookOpen className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>
                  Human-Robot Interaction research with publications at IEEE
                  RO-MAN
                </span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <Trophy className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>
                  Led AIChE Chem-E-Car team to 2nd place Mid-Atlantic Regional
                </span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <Users className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>
                  Mentored 150+ students in software engineering principles
                </span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <Star className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>
                  Financial management and event coordination for student
                  organizations
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Projects */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Folder className="h-5 w-5" />
                Things I&apos;ve Built
              </CardTitle>
              <Button asChild variant="default" size="sm">
                <Link href="/projects" className="flex items-center gap-1">
                  See everything
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects
            .filter((project) => project.featured)
            .slice(0, 4)
            .map((project, index) => (
              <Card
                key={index}
                className="group transition-all duration-200 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="transition-colors group-hover:text-primary">
                      {project.title}
                    </CardTitle>
                    {project.link && (
                      <Link
                        href={project.link}
                        target={
                          project.link.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          project.link.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </Link>
                    )}
                  </div>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                  {project.achievements && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {project.achievements
                        .slice(0, 2)
                        .map((achievement, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs"
                          >
                            {achievement}
                          </Badge>
                        ))}
                    </div>
                  )}
                </CardHeader>
              </Card>
            ))}
        </div>
      </PageLayout>
    </div>
  );
}
