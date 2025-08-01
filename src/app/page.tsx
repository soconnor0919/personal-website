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

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="animate-fade-in-up space-y-6">
        <div className="space-y-4">
          <h1 className="animate-fade-in-up-delay-1 text-3xl font-bold">
            Sean O&apos;Connor
          </h1>
          <p className="animate-fade-in-up-delay-2 text-xl text-muted-foreground">
            Computer Science and Engineering student with experience in software
            development, robotics research, and technical leadership.
          </p>
          <div className="animate-fade-in-up-delay-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              <a href="mailto:sean@soconnor.dev" className="hover:text-primary">
                sean@soconnor.dev
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

      {/* Current Focus */}
      <section className="animate-fade-in-up space-y-6">
        <h2 className="text-2xl font-bold">Current Focus</h2>
        <div className="grid-equal-height grid gap-6 md:grid-cols-2">
          <div className="animate-fade-in-up-delay-1">
            <Card className="card-hover card-full-height">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <FlaskConical className="h-5 w-5" />
                  <CardTitle className="mb-1">
                    Human-Robot Interaction Research
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="card-content-stretch pt-0">
                <p className="text-muted-foreground">
                  Developing a web-based platform for HRI experiments that
                  addresses reproducibility challenges in Wizard-of-Oz studies.
                  Published at IEEE RO-MAN 2024 with second publication
                  forthcoming.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="animate-fade-in-up-delay-2">
            <Card className="card-hover card-full-height">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  <CardTitle className="mb-1">Academic Excellence</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="card-content-stretch pt-0">
                <p className="text-muted-foreground">
                  Bachelor of Science in Computer Science and Engineering at
                  Bucknell University. 3.86 Engineering GPA, Dean&apos;s List
                  multiple semesters. Expected graduation: May 2026.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="animate-fade-in-up space-y-6">
        <h2 className="text-2xl font-bold">Experience Highlights</h2>
        <div className="space-y-6">
          <div className="animate-fade-in-up-delay-1">
            <Card className="card-hover card-full-height">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="mb-1">
                      Software Developer - Riverhead Raceway
                    </CardTitle>
                    <CardDescription>Oct 2020 – Present</CardDescription>
                  </div>
                  <Building className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground">
                  Transformed organizational culture by building trust in
                  data-driven decision making. Revolutionized fan engagement
                  through a real-time statistics platform serving 1500+
                  concurrent users. Modernized entire technical infrastructure
                  through containerization and automated systems.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="animate-fade-in-up-delay-2">
            <Card className="card-hover">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="mb-1">
                      Computer Science Researcher - Bucknell University
                    </CardTitle>
                    <CardDescription>Jan 2023 – Present</CardDescription>
                  </div>
                  <FlaskConical className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground">
                  Led research and authored first-author paper presented at
                  international conference. Built framework that enables
                  researchers to conduct experiments across different robot
                  platforms without specialized programming knowledge.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="animate-fade-in-up-delay-3">
            <Card className="card-hover">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="mb-1">
                      Teaching Assistant - Computer Science
                    </CardTitle>
                    <CardDescription>Jan 2024 – Present</CardDescription>
                  </div>
                  <Users className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground">
                  Mentored 150+ students in software engineering principles,
                  connecting theoretical concepts to real-world applications.
                  Developed learning environments that embrace productive
                  failure.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="animate-fade-in-up space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <Code className="h-6 w-6" />
          Technical Skills
        </h2>
        <div className="grid-equal-height grid gap-6 md:grid-cols-2">
          <div className="animate-fade-in-up-delay-1">
            <Card className="card-hover card-full-height">
              <CardHeader className="pb-3">
                <CardTitle className="mb-1">Languages & Frameworks</CardTitle>
              </CardHeader>
              <CardContent className="card-content-stretch pt-0">
                <p className="text-muted-foreground">
                  Java, C/C++, Python, JavaScript/TypeScript, React, Next.js,
                  PHP, SQL
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="animate-fade-in-up-delay-2">
            <Card className="card-hover card-full-height">
              <CardHeader className="pb-3">
                <CardTitle className="mb-1">Backend & DevOps</CardTitle>
              </CardHeader>
              <CardContent className="card-content-stretch pt-0">
                <p className="text-muted-foreground">
                  REST APIs, MySQL, PostgreSQL, Docker, Apache Web Server,
                  NGINX, ROS2
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="animate-fade-in-up-delay-3">
            <Card className="card-hover card-full-height">
              <CardHeader className="pb-3">
                <CardTitle className="mb-1">Cloud & Infrastructure</CardTitle>
              </CardHeader>
              <CardContent className="card-content-stretch pt-0">
                <p className="text-muted-foreground">
                  AWS, GCP, Azure, Backblaze, Linux (RHEL/Debian), CI/CD
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="animate-fade-in-up-delay-4">
            <Card className="card-hover card-full-height">
              <CardHeader className="pb-3">
                <CardTitle className="mb-1">Development Tools</CardTitle>
              </CardHeader>
              <CardContent className="card-content-stretch pt-0">
                <p className="text-muted-foreground">
                  Git, JetBrains Suite, VS Code, Cursor, Linux CLI
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership & Activities */}
      <section className="animate-fade-in-up space-y-6">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <Users className="h-6 w-6" />
          Leadership & Activities
        </h2>
        <div className="grid-equal-height grid gap-6 md:grid-cols-2">
          <div className="animate-fade-in-up-delay-1">
            <Card className="card-hover card-full-height">
              <CardHeader className="pb-3">
                <CardTitle className="mb-1">
                  AIChE Chem-E-Car Competition Team
                </CardTitle>
                <CardDescription>
                  Former President, Electrical and Mechanical Team Lead
                </CardDescription>
              </CardHeader>
              <CardContent className="card-content-stretch pt-0">
                <p className="text-muted-foreground">
                  Pioneered team&apos;s first custom hardware solution by
                  designing and fabricating a microcontroller-based control
                  system. Improved team dynamics by introducing agile
                  development principles and structured communication protocols.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="animate-fade-in-up-delay-2">
            <Card className="card-hover card-full-height">
              <CardHeader className="pb-3">
                <CardTitle className="mb-1">Bucknell Coffee Society</CardTitle>
                <CardDescription>Treasurer</CardDescription>
              </CardHeader>
              <CardContent className="card-content-stretch pt-0">
                <p className="text-muted-foreground">
                  Co-established and launched a new campus organization,
                  managing financial operations and coordinating event
                  logistics.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="animate-fade-in-up-delay-3">
            <Card className="card-hover card-full-height">
              <CardHeader className="pb-3">
                <CardTitle className="mb-1">RoboLab@Bucknell</CardTitle>
                <CardDescription>Founding Member</CardDescription>
              </CardHeader>
              <CardContent className="card-content-stretch pt-0">
                <p className="text-muted-foreground">
                  Led and participated in group discussions in a new lab
                  bridging computer science and psychology perspectives on
                  human-robot interaction, working with the complexities of
                  human-robot trust, job replacement, and autonomy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="animate-fade-in-up space-y-6">
        <h2 className="text-2xl font-bold">Explore More</h2>
        <div className="grid-equal-height grid gap-4 md:grid-cols-3">
          <div className="animate-fade-in-up-delay-1">
            <Card className="card-hover card-full-height group cursor-pointer transition-colors hover:bg-accent">
              <Link href="/publications" className="block h-full p-4">
                <CardContent className="card-content-stretch p-0">
                  <div className="flex h-full items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FlaskConical className="h-6 w-6 text-primary" />
                      <div>
                        <div className="font-medium">Research Publications</div>
                        <div className="text-sm text-muted-foreground">
                          IEEE conferences and ongoing research
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                  </div>
                </CardContent>
              </Link>
            </Card>
          </div>

          <div className="animate-fade-in-up-delay-2">
            <Card className="card-hover card-full-height group cursor-pointer transition-colors hover:bg-accent">
              <Link href="/projects" className="block h-full p-4">
                <CardContent className="card-content-stretch p-0">
                  <div className="flex h-full items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Code className="h-6 w-6 text-primary" />
                      <div>
                        <div className="font-medium">Projects</div>
                        <div className="text-sm text-muted-foreground">
                          Software development and research work
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                  </div>
                </CardContent>
              </Link>
            </Card>
          </div>

          <div className="animate-fade-in-up-delay-3">
            <Card className="card-hover card-full-height group cursor-pointer transition-colors hover:bg-accent">
              <Link href="/cv" className="block h-full p-4">
                <CardContent className="card-content-stretch p-0">
                  <div className="flex h-full items-center justify-between">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="h-6 w-6 text-primary" />
                      <div>
                        <div className="font-medium">Curriculum Vitae</div>
                        <div className="text-sm text-muted-foreground">
                          Complete academic and professional record
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                  </div>
                </CardContent>
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
