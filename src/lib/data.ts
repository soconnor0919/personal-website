import { Github, Linkedin, Mail, School, GraduationCap } from "lucide-react";

export const name = [
  {
    first: "Sean",
    last: "O'Connor",
  },
];

export const description = "Personal website and portfolio";

export const location = [
  {
    icon: School,
    label: "Bucknell University",
    href: "https://bucknell.edu",
  },
  {
    label: "Computer Science and Engineering",
  },
];

export const contact = [
  {
    icon: Mail,
    label: "Personal Email",
    href: "mailto:sean@soconnor.dev",
  },
  {
    icon: Mail,
    label: "University Email",
    href: "mailto:sso005@bucknell.edu",
  },

  {
    icon: GraduationCap,
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?hl=en&user=OCgINDcAAAAJ",
    external: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/bu-soconnor",
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/soconnor0919",
    external: true,
  },
];

export const articles = [
  {
    title: "Positively Innovative: Robotics for Good",
    link: "https://magazine.bucknell.edu/issue/fall-2024/robotics-for-good/",
    author: "Kate Willard",
    description:
      "Sean O'Connor '26 is using his interest in robotics to fuel forward-thinking research and lead important conversations about the impact robots can have on society.",
    source: "Bucknell Magazine (Fall 2024)",
  },
  {
    title: "Student Story: Sean O'Connor '26, Computer Science and Engineering",
    link: "https://www.bucknell.edu/meet-bucknell/bucknell-stories/student-stories/sean-oconnor-26-computer-science-engineering",
    author: "Sarah Downey",
    description:
      "At Bucknell, Sean O'Connor '26 is conducting research to improve the ways robots assist, collaborate and coexist with humans.",
    source: "Bucknell Student Stories",
  },
  {
    title: "Shaping the Future: Exploring the Social Impact of Robots",
    link: "https://magazine.bucknell.edu/college-of-engineering/2024-college-report/",
    author: "Bucknell Publications",
    description:
      "RoboLab provides an environment for scholarly and creative conversations.",
    source: "the Bucknell College of Engineering Report 2024",
  },
  // Add more articles as needed
];

export const projects = [
  {
    title: "HRIStudio",
    description:
      "A modular web-based experimental platform for human-robot interaction studies using the Wizard of Oz experimental paradigm.",
    longDescription:
      "Engineered a comprehensive platform that enables researchers to conduct human-robot interaction experiments without requiring extensive programming knowledge. The system integrates with ROS2 and provides a user-friendly interface for experiment design and execution.",
    tags: ["ROS2", "React", "TypeScript", "C++", "Python"],
    link: "https://github.com/soconnor0919/hristudio",
    image: "/hristudio_laptop.png",
    imageAlt:
      "Screenshot of HRIStudio application showing the robot control dashboard on a laptop",
    featured: true,
  },
  {
    title: "BeenVoice - Professional Invoicing Platform",
    description:
      "A comprehensive business invoicing application built with the T3 stack for reliable invoice and client management.",
    longDescription:
      "Developed a full-stack invoicing platform prioritizing reliability, security, and professional user experience. Features include multi-step invoice creation with flexible line items, automated PDF generation, client management with complete contact details, business profile management with branding support, and comprehensive status tracking (draft → sent → paid/overdue). The application implements proper authentication, input validation, and error handling throughout, with a mobile-first responsive design using shadcn/ui components.",
    tags: [
      "Next.js",
      "TypeScript",
      "tRPC",
      "Drizzle ORM",
      "NextAuth.js",
      "LibSQL",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    link: "https://github.com/soconnor0919/beenvoice", // Update with actual repository URL
    image: "/images/beenvoice.png",
    imageAlt: "Screenshot of BeenVoice",
    featured: true,
  },
  {
    title: "Personal Website",
    description:
      "Modern, responsive personal website built with Next.js and TailwindCSS.",
    longDescription:
      "Designed and developed a personal portfolio website using modern web technologies. Features include responsive design, dark mode support, PDF rendering for CV display, and a clean, professional interface for showcasing projects and experience.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "React"],
    link: "https://github.com/soconnor0919/personal-website",
    image: "/images/personal-website.png",
    imageAlt: "Screenshot of Personal Website",
    featured: true,
  },
  {
    title: "Accessibility Features",
    description:
      "An overview of the accessibility features implemented on this website to ensure inclusive user experience.",
    longDescription:
      "This page details the importance of web accessibility and the specific features implemented on this website to ensure an inclusive experience for all users, including those with disabilities. It documents the accessibility practices, standards compliance, and testing methodologies used.",
    tags: ["Accessibility", "WCAG", "Inclusive Design", "Web Standards"],
    link: "/projects/accessibility",
    featured: true,
  },
  {
    title: "LaTeX Introduction Tutorial",
    description:
      "A 5-minute introduction to LaTeX document preparation system for academic and technical writing.",
    longDescription:
      "Created an accessible tutorial video explaining LaTeX, a typesetting system commonly used for technical and scientific documents in academia. The video covers how to set up Overleaf as an editor, explains key LaTeX tags and formatting, demonstrates both inline and display math equations, and provides a complete walkthrough of creating your first document with proper formatting.",
    tags: ["LaTeX", "Tutorial", "Accessibility", "Education", "Overleaf"],
    link: "/projects/latex-intro",
    image: "/latex-thumbnail.jpg",
    imageAlt:
      "Decorative thumbnail showing the project title 'Getting Started with LaTeX'",
    featured: true,
  },
  {
    title: "RaceHub Next - Motorsports Track Management Platform",
    description:
      "A comprehensive web platform for Riverhead Raceway, a local motorsports track in New York, serving 1500+ concurrent users during race events.",
    longDescription:
      "The platform combines a public website for fans to access event schedules, race results, and competitor information with a sophisticated content management system for track staff. Features include automated email newsletters reaching thousands of subscribers, real-time race data management across multiple racing divisions, championship standings tracking, and mobile-responsive design for on-site access. The system centralizes all track operations from event scheduling to competitor management, replacing a legacy system while maintaining critical functionality for one of Long Island's premier racing venues",
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Auth.js",
      "Tailwind CSS",
    ],
    link: "https://riverheadraceway.com",
    image: "/images/racehub.png",
    imageAlt: "Screenshot of the RaceHub Next platform",
    featured: true,
  },
  {
    title: "Formula One Lap Time Prediction",
    description:
      "Machine learning project analyzing Formula One race data to predict lap times based on weather conditions and track characteristics.",
    longDescription:
      "A comprehensive data mining project that analyzes Formula One race data to predict lap times using machine learning models. Achieved significant success with varying models by incorporating weather conditions, track characteristics, and tire degradation metrics. Data sourced from FastF1 API with analysis covering multiple tracks and racing conditions.",
    tags: [
      "Python",
      "Machine Learning",
      "Data Science",
      "LightGBM",
      "FastF1",
      "Jupyter",
    ],
    link: "https://github.com/soconnor0919/f1-race-prediction",
    featured: true,
  },
  {
    title: "Chem-E-Car Control System",
    description:
      "Custom microcontroller-based control system for hydrogen fuel cell regulation and reaction monitoring.",
    longDescription:
      "Pioneered the team's first custom hardware solution, implementing a finite state machine architecture that integrates spectrometer readings, relay control, and LED feedback for real-time reaction monitoring.",
    tags: ["C++", "Embedded Systems", "Hardware Design"],
    link: "https://github.com/soconnor0919/national_fa24",
    image: "/car.png",
    imageAlt:
      "Photo of the Chem-E-Car with custom control system hardware visible, showing the microcontroller and sensor connections",
    featured: true,
  },
];

export const travel = [
  {
    title: "AIChE Annual Student Conference 2024",
    description:
      "With the funding of Bucknell's chemical engineering department, and an amazing team, I was able to attend the 2024 AIChE Annual Student Conference and compete in the national Chem-E-Car competition.",
    images: [
      "/trips/asc2024/IMG_2641.png",
      "/trips/asc2024/IMG_2631.png",
      "/trips/asc2024/IMG_7987.png",
    ],
    alts: [
      "A photo of the Chem-E-Car team holding their trophies, dressed in their lab coats.",
      "A selfie of the Chem-E-Car team at their workstation.",
      "Sean discussing the components of the Chem-E-Car with a judge.",
    ],
    tags: ["Chem-E-Car", "AIChE", "Conference", "Competition"],
  },
  {
    title: "IEEE RO-MAN 2024",
    description:
      "I got to attend the IEEE RO-MAN 2024 conference in Pasadena, California. It was a great opportunity to present my work on my project HRIStudio, and to network with other researchers and industry professionals.",
    images: [
      "/trips/roman2024/IMG_3951.png",
      "/trips/roman2024/IMG_3978.png",
      "/trips/roman2024/IMG_3946.png",
    ],
    alts: [
      "A photo of Sean presenting his poster at RO-MAN 2024.",
      "A photo Felipe and Sean at dinner.",
      "A photo of Sean discussing his poster with a group of attendees.",
    ],
    tags: ["RO-MAN", "IEEE", "Conference", "Presentation"],
  },
  {
    title: "ENGR 290: Following da Vinci's Footsteps",
    description:
      "During the summer of 2024, I went on a study abroad program with about thirty of my peers. We explored Italy and France, following the footsteps of Leonardo da Vinci- evaluating the world through his lenses.",
    images: [
      "/trips/engr290/insta290.jpg",
      "/trips/engr290/P1013747.png",
      "/trips/engr290/_1024461.png",
    ],
    alts: [
      "A photo of the group taken during the final dinner of the trip.",
      "A photo of Florence, taken from the top of a distant hill.",
      "A photo of the River Seine in Paris, taken from the top of the Eiffel Tower.",
    ],
    tags: ["Study Abroad", "Italy", "France", "da Vinci"],
  },
  {
    title: "SCA Specialty Coffee Expo 2024",
    description:
      "As a member of the executive board of the Bucknell Coffee Society, I was able to attend the Specialty Coffee Association's Specialty Coffee Expo in early 2024, traveling to Chicago, IL.",
    images: [
      "/trips/sca2024/group.jpeg",
      "/trips/sca2024/bean.png",
      "/trips/sca2024/plane.png",
    ],
    alts: [
      "A photo of the group at the SCA Specialty Coffee Expo in Chicago.",
      "A photo of the Chicago Bean.",
      "A photo of Chicago's coastline, taken through the window of the plane.",
    ],
    tags: ["Coffee Society", "Chicago", "SCA", "Coffee"],
  },
  {
    title: "Formula 1 Gran Premio dell'Emilia Romagna 2024",
    description:
      "While studying abroad with Bucknell Engineering, we were lucky enough to be within a few hours of the Imola Grand Prix! A group of students went to see the race, and it was an amazing experience.",
    images: [
      "/trips/imola2024/IMG_2093.png",
      "/trips/imola2024/IMG_2050.png",
      "/trips/imola2024/IMG_2066.png",
    ],
    alts: [
      "A photo of the group at the Imola Circuit.",
      "A photo of flags on a fence, in honor of the late Ayrton Senna.",
      "A photo Lando Norris driving through the Imola Circuit, taken through a fence.",
    ],
    tags: ["Racing", "Formula One", "Italy"],
  },
  {
    title: "Formula 1 British Grand Prix 2024",
    description:
      "As a semi-recent Formula One fan, I was very excited to have the opportunity to attend the British Grand Prix weekend in 2024. I was able to see every event- marking one of my favorite weekends, probably ever.",
    images: [
      "/trips/silverstone/_1035852.png",
      "/trips/silverstone/P1025274.png",
      "/trips/silverstone/_1035764.png",
    ],
    alts: [
      "Sean and his professor sitting on a sign with the text #BritishGP.",
      "A close-up photo of the rear of the McLaren MCL38.",
      "A photo of Oscar Piastri taking a turn at Silverstone Circuit.",
    ],
    tags: ["Racing", "Formula One", "Great Britain", "Silverstone"],
  },
];
