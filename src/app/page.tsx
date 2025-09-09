import {
  ArrowUpRight,
  Code,
  FlaskConical,
  Users,
  GraduationCap,
  Building,
  MapPin,
  Mail,
  ExternalLink,
  BookOpen,
  School,
  Award,
  Calendar,
} from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { researchInterests, education, experiences, awards } from "~/lib/data";

export default function HomePage() {
  const researchExperience = experiences.filter(
    (exp) => exp.type === "research",
  );
  const teachingExperience = experiences.filter(
    (exp) => exp.type === "teaching",
  );
  const professionalExperience = experiences.filter(
    (exp) => exp.type === "professional",
  );
  const leadershipExperience = experiences.filter(
    (exp) => exp.type === "leadership",
  );

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="animate-fade-in-up space-y-6">
        <div className="space-y-4">
          <h1 className="animate-fade-in-up-delay-1 text-3xl font-bold">
            Sean O&apos;Connor
          </h1>
          <p className="animate-fade-in-up-delay-2 text-xl text-muted-foreground">
            Computer Science and Engineering student passionate about
            human-robot interaction and developing technologies that make robots
            better collaborators with humans.
          </p>
          <div className="animate-fade-in-up-delay-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              <a href="mailto:sean@soconnor.dev" className="hover:text-primary">
                sean@soconnor.dev
              </a>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              <a
                href="mailto:sso005@bucknell.edu"
                className="hover:text-primary"
              >
                sso005@bucknell.edu
              </a>
            </div>

            <div className="flex items-center gap-1">
              <GraduationCap className="h-4 w-4" />
              Bucknell University
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              Lewisburg, PA
            </div>
          </div>
          <div className="animate-fade-in-up-delay-4 flex gap-3">
            <Button variant="outline" asChild className="button-hover">
              <Link href="/cv">
                <ExternalLink className="mr-2 h-4 w-4" />
                View CV
              </Link>
            </Button>
            <Button variant="outline" asChild className="button-hover">
              <Link href="/publications">
                <BookOpen className="mr-2 h-4 w-4" />
                Publications
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="animate-fade-in-up space-y-6">
        <h2 className="text-2xl font-bold">Research Interests</h2>
        <div className="animate-fade-in-up-delay-1">
          <Card className="card-hover">
            <CardContent className="pt-6">
              <p className="leading-relaxed text-muted-foreground">
                {researchInterests}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education */}
      <section className="animate-fade-in-up space-y-6">
        <h2 className="text-2xl font-bold">Education</h2>
        <div className="animate-fade-in-up-delay-1">
          <Card className="card-hover">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="mb-1">
                    {education.institution}
                  </CardTitle>
                  <CardDescription>{education.location}</CardDescription>
                </div>
                <School className="h-5 w-5 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent className="space-y-3 pt-0">
              <div>
                <p className="font-medium">{education.degree}</p>
                <p className="text-sm text-muted-foreground">
                  Expected {education.expectedGraduation}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">
                  Engineering GPA: {education.gpa}
                </Badge>
                <Badge variant="outline">
                  Dean&apos;s List: {education.deansListSemesters.length}{" "}
                  semesters
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Research Experience */}
      <section className="animate-fade-in-up space-y-6">
        <h2 className="text-2xl font-bold">Research Experience</h2>
        <div className="space-y-6">
          {researchExperience.map((exp, index) => (
            <div
              key={index}
              className={`animate-fade-in-up-delay-${index + 1}`}
            >
              <Card className="card-hover">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="mb-1">{exp.title}</CardTitle>
                      <CardDescription>{exp.organization}</CardDescription>
                      <CardDescription className="text-xs">
                        {exp.location} • {exp.period}
                      </CardDescription>
                    </div>
                    <FlaskConical className="h-5 w-5 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Experience Highlights */}
      <section className="animate-fade-in-up space-y-6">
        <h2 className="text-2xl font-bold">
          Professional Experience Highlights
        </h2>
        <div className="space-y-6">
          {professionalExperience.slice(0, 2).map((exp, index) => (
            <div
              key={index}
              className={`animate-fade-in-up-delay-${index + 1}`}
            >
              <Card className="card-hover">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="mb-1">{exp.title}</CardTitle>
                      <CardDescription>{exp.organization}</CardDescription>
                      <CardDescription className="text-xs">
                        {exp.location} • {exp.period}
                      </CardDescription>
                    </div>
                    <Building className="h-5 w-5 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {exp.description.slice(0, 3).map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Teaching Experience */}
      <section className="animate-fade-in-up space-y-6">
        <h2 className="text-2xl font-bold">Teaching Experience</h2>
        <div className="grid-equal-height grid gap-6 md:grid-cols-2">
          {teachingExperience.slice(0, 4).map((exp, index) => (
            <div
              key={index}
              className={`animate-fade-in-up-delay-${index + 1}`}
            >
              <Card className="card-hover card-full-height">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 flex-shrink-0" />
                    <div className="min-w-0">
                      <CardTitle className="mb-1 break-words text-base leading-tight">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="break-words text-xs">
                        {exp.organization}
                      </CardDescription>
                      <CardDescription className="text-xs">
                        {exp.period}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="card-content-stretch pt-0">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {exp.description[0]}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership & Activities */}
      <section className="animate-fade-in-up space-y-6">
        <h2 className="text-2xl font-bold">Leadership & Activities</h2>
        <div className="grid-equal-height grid gap-6 md:grid-cols-2">
          {leadershipExperience.map((exp, index) => (
            <div
              key={index}
              className={`animate-fade-in-up-delay-${index + 1}`}
            >
              <Card className="card-hover card-full-height">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 flex-shrink-0" />
                    <div className="min-w-0">
                      <CardTitle className="mb-1 break-words text-base leading-tight">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="break-words text-xs">
                        {exp.organization}
                      </CardDescription>
                      <CardDescription className="text-xs">
                        {exp.period}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="card-content-stretch pt-0">
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {exp.description.slice(0, 2).map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground" />
                        <span className="break-words">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Awards & Recognition */}
      <section className="animate-fade-in-up space-y-6">
        <h2 className="text-2xl font-bold">Recent Awards & Recognition</h2>
        <div className="grid-equal-height grid gap-4 md:grid-cols-2">
          {awards.map((award, index) => (
            <div
              key={index}
              className={`animate-fade-in-up-delay-${index + 1}`}
            >
              <Card className="card-hover card-full-height">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 flex-shrink-0" />
                    <div className="min-w-0">
                      <CardTitle className="mb-1 break-words text-base leading-tight">
                        {award.title}
                      </CardTitle>
                      {award.organization && (
                        <CardDescription className="break-words">
                          {award.organization} • {award.year}
                        </CardDescription>
                      )}
                    </div>
                  </div>
                </CardHeader>
                {award.description && (
                  <CardContent className="card-content-stretch pt-0">
                    <p className="break-words text-sm leading-relaxed text-muted-foreground">
                      {award.description}
                    </p>
                  </CardContent>
                )}
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="animate-fade-in-up space-y-6">
        <h2 className="text-2xl font-bold">Explore More</h2>
        <div className="grid-equal-height grid gap-6 md:grid-cols-3">
          <div className="animate-fade-in-up-delay-1">
            <Card className="card-hover card-full-height">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Code className="h-5 w-5 flex-shrink-0" />
                  <CardTitle className="mb-1 break-words">Projects</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="card-content-stretch pt-0">
                <div className="flex h-full flex-col">
                  <p className="break-words leading-relaxed text-muted-foreground">
                    Explore my featured projects including HRIStudio, machine
                    learning research, and web applications.
                  </p>
                  <Button variant="outline" asChild className="mt-auto w-full">
                    <Link href="/projects">
                      View Projects
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="animate-fade-in-up-delay-2">
            <Card className="card-hover card-full-height">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 flex-shrink-0" />
                  <CardTitle className="mb-1 break-words">
                    Publications
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="card-content-stretch pt-0">
                <div className="flex h-full flex-col">
                  <p className="break-words leading-relaxed text-muted-foreground">
                    Read my peer-reviewed publications in human-robot
                    interaction research.
                  </p>
                  <Button variant="outline" asChild className="mt-auto w-full">
                    <Link href="/publications">
                      View Publications
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="animate-fade-in-up-delay-3">
            <Card className="card-hover card-full-height">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <ExternalLink className="h-5 w-5 flex-shrink-0" />
                  <CardTitle className="mb-1 break-words">
                    Complete CV
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="card-content-stretch pt-0">
                <div className="flex h-full flex-col">
                  <p className="break-words leading-relaxed text-muted-foreground">
                    View my complete academic and professional curriculum vitae.
                  </p>
                  <Button variant="outline" asChild className="mt-auto w-full">
                    <Link href="/cv">
                      View CV
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
