import {
  Github,
  Linkedin,
  Mail,
  Phone,
  School,
  GraduationCap,
} from "lucide-react";

export const name = [
  {
    first: "Sean",
    last: "O'Connor",
  },
];

export const description =
  "Computer Science and Engineering student at Bucknell University. Published researcher at IEEE RO-MAN with expertise in human-robot interaction, full-stack development, and technical leadership. Passionate about building technology that enhances human capabilities and transforms organizations through data-driven solutions.";

export const location = [
  {
    icon: School,
    label: "Bucknell University",
    href: "https://bucknell.edu",
  },
  {
    icon: GraduationCap,
    label: "CS&E '26",
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
    icon: Phone,
    label: "Phone",
    href: "tel:+16316016555",
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

export const publications = [
  {
    title:
      "HRIStudio: A Framework for Wizard-of-Oz Experiments in Human-Robot Interaction Studies",
    authors: "Sean O'Connor and L. Felipe Perrone",
    venue:
      "2024 33rd IEEE International Conference on Robot and Human Interactive Communication (RO-MAN)",
    year: 2024,
    type: "Conference Paper",
    status: "Published",
    note: "Late Breaking Report",
  },
  {
    title:
      "A Web-Based Wizard-of-Oz platform for collaborative and reproducible Human-Robot Interaction research",
    authors: "Sean O'Connor and L. Felipe Perrone",
    venue:
      "2025 34th IEEE International Conference on Robot and Human Interactive Communication (RO-MAN)",
    location: "Eindhoven, The Netherlands",
    year: 2025,
    type: "Conference Paper",
    status: "Accepted for publication",
  },
];

export const projects = [
  {
    title: "beenvoice",
    description:
      "A modern, professional invoicing application built for freelancers and small businesses with secure authentication and client management.",
    longDescription:
      "Developed a comprehensive invoicing platform that streamlines business operations for freelancers and small businesses. Features secure authentication, client management, professional invoice generation with flexible pricing, and a responsive design built with modern web technologies. The application uses a type-safe architecture with tRPC and includes local SQLite database storage for reliable data management.",
    tags: [
      "Next.js 15",
      "tRPC",
      "TypeScript",
      "Drizzle ORM",
      "SQLite",
      "NextAuth.js",
      "shadcn/ui",
      "Tailwind CSS",
    ],
    link: "https://github.com/soconnor0919/beenvoice",
    image: "/beenvoice_dashboard.png",
    imageAlt:
      "Screenshot of beenvoice dashboard showing client management and invoice creation interface",
    featured: true,
  },
  {
    title: "HRIStudio",
    description:
      "A web-based platform for human-robot interaction experiments that addresses reproducibility challenges in Wizard-of-Oz studies.",
    longDescription:
      "Developed as part of my research at Bucknell University, HRIStudio enables researchers to conduct rigorous HRI experiments without specialized programming knowledge. The platform features a modular architecture, integrates with ROS2, and has contributed to improved experimental rigor in the field. My work on this platform resulted in first-author publications at IEEE RO-MAN conferences.",
    tags: ["ROS2", "React", "TypeScript", "C++", "Python", "Research"],
    link: "https://github.com/soconnor0919/hristudio",
    image: "/hristudio_laptop.png",
    imageAlt:
      "Screenshot of HRIStudio application showing the robot control dashboard on a laptop",
    featured: true,
    achievements: [
      "Published at IEEE RO-MAN 2024",
      "Second publication accepted for RO-MAN 2025",
    ],
  },
  {
    title: "Riverhead Raceway Platform",
    description:
      "Transformed organizational culture by building trust in data-driven decision making, serving 1500+ concurrent users.",
    longDescription:
      "Led complete digital transformation of a racing facility, replacing manual paper-based workflows with integrated digital solutions. Built real-time statistics platform, content management tools, and modernized entire technical infrastructure through containerization. The platform eliminated processing delays, improved operational efficiency, and enabled professional broadcast capabilities.",
    tags: ["PHP", "MariaDB", "WebSockets", "Docker", "Infrastructure"],
    link: "https://riverheadraceway.com",
    featured: true,
    achievements: [
      "1500+ concurrent users",
      "Eliminated manual workflows",
      "Enabled live streaming to national networks",
    ],
  },
  {
    title: "Chem-E-Car Control System",
    description:
      "Pioneered team's first custom hardware solution with microcontroller-based control system for hydrogen fuel cell regulation.",
    longDescription:
      "Designed and fabricated a comprehensive control system implementing finite state machine architecture that integrates spectrometer readings, relay control, and LED feedback for real-time reaction monitoring. Led the team to second place at Mid-Atlantic Regional Competition and national competition participation.",
    tags: [
      "C++",
      "Embedded Systems",
      "Hardware Design",
      "Finite State Machines",
    ],
    link: "https://github.com/soconnor0919/national_fa24",
    image: "/car.png",
    imageAlt:
      "Photo of the Chem-E-Car with custom control system hardware visible, showing the microcontroller and sensor connections",
    featured: true,
    achievements: [
      "2nd place Mid-Atlantic Regional 2024",
      "National competition qualifier",
    ],
  },
  {
    title: "LaTeX Introduction Tutorial",
    description:
      "Accessible 5-minute introduction to LaTeX document preparation system for academic and technical writing.",
    longDescription:
      "Created an educational video tutorial that makes LaTeX accessible to newcomers. Covers Overleaf setup, key formatting concepts, mathematical equations, and complete document creation. Designed with accessibility in mind to ensure inclusive learning for all students.",
    tags: ["LaTeX", "Tutorial", "Accessibility", "Education", "Overleaf"],
    link: "/projects/latex-intro",
    image: "/latex-thumbnail.jpg",
    imageAlt:
      "Decorative thumbnail showing the project title 'Getting Started with LaTeX'",
    featured: true,
  },
  {
    title: "Personal Website",
    description:
      "Modern, responsive portfolio website built with Next.js, showcasing projects and research.",
    longDescription:
      "Designed and developed a comprehensive personal portfolio website using modern web technologies. Features responsive design, accessibility compliance, PDF rendering for CV display, and a clean interface for showcasing projects and research experience.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "React", "Accessibility"],
    link: "https://github.com/soconnor0919/personal-website",
    featured: true,
  },
  {
    title: "Web Accessibility Implementation",
    description:
      "Comprehensive accessibility features ensuring inclusive user experience across all website components.",
    longDescription:
      "Detailed documentation and implementation of web accessibility features following WCAG guidelines. Includes semantic HTML, keyboard navigation, screen reader compatibility, and inclusive design practices to ensure the website is usable by all visitors.",
    tags: ["Accessibility", "WCAG", "Inclusive Design", "Web Standards"],
    link: "/projects/accessibility",
    featured: true,
  },
];

export const experience = [
  {
    title: "Software Developer",
    company: "Riverhead Raceway",
    location: "Riverhead, NY",
    period: "Oct 2020 – Present",
    highlights: [
      "Transformed organizational culture by building trust in data-driven decision making",
      "Built real-time statistics platform serving 1500+ concurrent users",
      "Empowered non-technical staff with intuitive content management tools",
      "Modernized technical infrastructure through containerization and automation",
    ],
  },
  {
    title: "Computer Science Researcher - HRI",
    company: "Bucknell University",
    location: "Lewisburg, PA",
    period: "Jan 2023 – Present",
    highlights: [
      "Developed web-based platform for human-robot interaction experiments",
      "Authored first-author paper presented at IEEE RO-MAN 2024",
      "Built framework enabling cross-platform robot experiments",
      "Contributed to improved experimental rigor in HRI field",
    ],
  },
  {
    title: "Teaching Assistant - Computer Science",
    company: "Bucknell University",
    location: "Lewisburg, PA",
    period: "Jan 2024 - Present",
    highlights: [
      "Mentored 150+ students in software engineering principles",
      "Connected theoretical concepts to real-world applications",
      "Developed learning environments embracing productive failure",
      "Helped students understand the 'why' behind programming concepts",
    ],
  },
];

export const achievements = [
  "Published researcher at IEEE RO-MAN 2024 with second publication accepted for 2025",
  "Dean's List: Fall 2022, Fall 2023, Spring 2024, Fall 2024, Spring 2025",
  "Cumulative Engineering GPA: 3.86",
  "Former President of AIChE Chem-E-Car Competition Team",
  "2nd place Mid-Atlantic AIChE Chem-E-Car Competition 2024",
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
