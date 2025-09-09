import {
  FlaskConical,
  GraduationCap,
  Building,
  Users,
  Calendar,
  MapPin,
  Award,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import {
  experiences,
  awards,
  conferences,
  technicalSkills,
  relevantCoursework,
} from "~/lib/data";

export default function ExperiencePage() {
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

  const getIcon = (type: string) => {
    switch (type) {
      case "research":
        return FlaskConical;
      case "teaching":
        return GraduationCap;
      case "professional":
        return Building;
      case "leadership":
        return Users;
      default:
        return Building;
    }
  };

  const renderExperienceSection = (
    title: string,
    experiences: typeof researchExperience,
    delay: number = 1,
  ) => (
    <section className="animate-fade-in-up space-y-6">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => {
          const IconComponent = getIcon(exp.type);
          return (
            <div
              key={index}
              className={`animate-fade-in-up-delay-${Math.min(delay + index, 4)} card-hover`}
            >
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-start gap-3">
                        <IconComponent className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                        <div className="min-w-0 flex-1">
                          <CardTitle className="break-words text-lg leading-tight">
                            {exp.title}
                          </CardTitle>
                          <CardDescription className="mt-1 break-words text-base font-medium">
                            {exp.organization}
                          </CardDescription>
                          <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {exp.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {exp.period}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        <span className="break-words leading-relaxed text-muted-foreground">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="animate-fade-in-up prose prose-zinc dark:prose-invert max-w-none">
        <div className="flex items-start gap-3">
          <Building className="h-8 w-8 text-primary" />
          <div>
            <h1 className="mb-2 text-2xl font-bold">Experience</h1>
          </div>
        </div>
        <p className="mt-2 text-lg text-muted-foreground">
          My comprehensive experience across research, teaching, professional
          development, and leadership roles.
        </p>
      </section>

      {/* Research Experience */}
      {renderExperienceSection("Research Experience", researchExperience, 1)}

      {/* Teaching Experience */}
      {renderExperienceSection("Teaching Experience", teachingExperience, 2)}

      {/* Professional Experience */}
      {renderExperienceSection(
        "Professional Experience",
        professionalExperience,
        3,
      )}

      {/* Leadership & Activities */}
      {renderExperienceSection(
        "Leadership & Activities",
        leadershipExperience,
        4,
      )}

      {/* Technical Skills */}
      <section className="animate-fade-in-up space-y-6">
        <h2 className="text-2xl font-bold">Technical Skills</h2>
        <div className="grid-equal-height grid gap-6 md:grid-cols-2">
          {Object.entries(technicalSkills).map(([category, skills], index) => (
            <div
              key={category}
              className={`animate-fade-in-up-delay-${Math.min(index + 1, 4)} card-hover`}
            >
              <Card className="card-full-height">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent className="card-content-stretch pt-0">
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Conferences & Presentations */}
      <section className="animate-fade-in-up space-y-6">
        <h2 className="text-2xl font-bold">Conferences & Presentations</h2>
        <div className="grid-equal-height grid gap-4 md:grid-cols-1 lg:grid-cols-2">
          {conferences.map((conf, index) => (
            <div
              key={index}
              className={`animate-fade-in-up-delay-${Math.min(index + 1, 4)} card-hover`}
            >
              <Card className="card-full-height">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="min-w-0">
                      <CardTitle className="break-words text-lg leading-tight">
                        {conf.title}
                      </CardTitle>
                      <CardDescription className="mt-1 break-words">
                        {conf.location} • {conf.date}
                      </CardDescription>
                    </div>
                    <Award className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground">{conf.presentation}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="animate-fade-in-up space-y-6">
        <h2 className="text-2xl font-bold">Awards & Recognition</h2>
        <div className="grid-equal-height grid gap-4 md:grid-cols-2">
          {awards.map((award, index) => (
            <div
              key={index}
              className={`animate-fade-in-up-delay-${Math.min(index + 1, 4)} card-hover`}
            >
              <Card className="card-full-height">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <Award className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <div className="min-w-0">
                      <CardTitle className="break-words text-base leading-tight">
                        {award.title}
                      </CardTitle>
                      {award.organization && (
                        <CardDescription className="mt-1 break-words">
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

      {/* Relevant Coursework */}
      <section className="animate-fade-in-up space-y-6">
        <h2 className="text-2xl font-bold">Relevant Coursework</h2>
        <div className="animate-fade-in-up-delay-1">
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {relevantCoursework.map((course, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span className="break-words leading-relaxed text-muted-foreground">
                      {course}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
