import { ArrowUpRight, Code, FlaskConical, Users, Star } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { projects, name } from "~/lib/data";

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* About Section */}
      <section className="space-y-6">
        <div>
          <h1 className="flex items-center gap-2 text-2xl font-bold">
            Hi! I'm {name[0]?.first}.
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            I am a Computer Science and Engineering student at Bucknell
            University, passionate about robotics, software development, and
            human-computer interaction. With a strong foundation in both
            academic research and practical development, I bridge the gap
            between theoretical concepts and real-world applications.
          </p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              <CardTitle>Technical Expertise</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
              <li>
                Full-stack development with modern frameworks (React, Next.js,
                Node.js)
              </li>
              <li>Robotics development using ROS2 and C++</li>
              <li>Systems programming and architecture design</li>
              <li>Database design and optimization (SQL, PostgreSQL)</li>
              <li>Cloud infrastructure and DevOps (AWS, Docker)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <FlaskConical className="h-5 w-5" />
              <CardTitle>Research Focus</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
              <li>Human-Robot Interaction studies and experimental design</li>
              <li>Published researcher at IEEE RO-MAN 2024</li>
              <li>Development of experimental platforms for HRI research</li>
              <li>Integration of robotics in chemical engineering research</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <CardTitle>Leadership</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
              <li>President of AIChE Chem-E-Car Competition Team</li>
              <li>Treasurer of Bucknell Coffee Society</li>
              <li>Teaching Assistant for Computer Science courses</li>
              <li>Founding member of RoboLab@Bucknell</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Featured Projects Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <Star className="h-6 w-6" />
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
          >
            View all projects
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="space-y-6">
          {projects
            .filter((project) => project.featured)
            .slice(0, 2)
            .map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{project.title}</CardTitle>
                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary"
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </Link>
                    )}
                  </div>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
        </div>
      </section>
    </div>
  );
}
