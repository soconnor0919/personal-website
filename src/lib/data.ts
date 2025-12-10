import { Github, Linkedin, Mail, School, GraduationCap } from "lucide-react";

// TypeScript interfaces
export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  link?: string; // For internal links (like /projects/accessibility)
  gitLink?: string; // For GitHub repository links
  websiteLink?: string; // For deployed website links
  image?: string;
  imageAlt?: string;
  featured: boolean;
}

export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: "conference" | "journal" | "workshop" | "thesis";
  abstract?: string;
  paperUrl?: string;
  doi?: string;
  address?: string;
  notes?: string;
}

export interface Experience {
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  type: "research" | "teaching" | "professional" | "leadership";
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  expectedGraduation: string;
  gpa: string;
  deansListSemesters: string[];
}

export interface Award {
  title: string;
  organization?: string;
  year: number;
  description?: string;
}

export const name = [
  {
    first: "Sean",
    last: "O'Connor",
  },
];

export const description =
  "Computer Science and Engineering student passionate about human-robot interaction and developing technologies that make robots better collaborators with humans.";

export const researchInterests =
  "I'm passionate about human-robot interaction and developing technologies that make robots better collaborators with humans. My work focuses on creating reproducible research methodologies, particularly through Wizard-of-Oz experiments, and building platforms that lower barriers for HRI researchers. I'm especially interested in how we can make robot behaviors more trustworthy and explainable, and how to design effective frameworks for studying human-robot collaboration across different contexts and applications.";

export const education: Education = {
  institution: "Bucknell University",
  location: "Lewisburg, PA",
  degree: "Bachelor of Science in Computer Science and Engineering",
  expectedGraduation: "May 2026",
  gpa: "3.86/4.0",
  deansListSemesters: [
    "Fall 2022",
    "Fall 2023",
    "Spring 2024",
    "Fall 2024",
    "Spring 2025",
  ],
};

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
];

export const experiences: Experience[] = [
  {
    title: "Lead Researcher - HRIStudio Platform Development",
    organization: "Human-Robot Interaction Research, Bucknell University",
    location: "Lewisburg, PA",
    period: "Jan 2023 – Present",
    description: [
      "Developing HRIStudio, a novel web-based platform addressing reproducibility challenges in Wizard-of-Oz HRI studies, with two first-author publications at IEEE RO-MAN 2024 and 2025",
      "Designed modular architecture enabling cross-platform robot control without specialized programming knowledge, lowering technical barriers for HRI researchers across disciplines",
      "Implemented comprehensive data logging and playback capabilities for experimental analysis, supporting rigorous scientific methodology in human-robot interaction studies",
      "Conducted literature review identifying key challenges in WoZ methodology reproducibility, informing platform design decisions and feature prioritization",
    ],
    type: "research",
  },
  {
    title:
      "Computer Science Research Assistant - Chemical Engineering Department",
    organization:
      "Interdisciplinary Research Collaboration, Bucknell University",
    location: "Lewisburg, PA",
    period: "Aug 2023 – May 2025",
    description: [
      "Developed automated data collection and analysis tools for environmental research, processing real-time sensor data streams for atmospheric and water quality monitoring",
      "Built custom Python pipelines integrating multiple data sources, enabling researchers to identify patterns in environmental data that informed conference presentations",
      "Bridged computer science expertise with domain-specific research needs, demonstrating ability to collaborate across disciplines",
    ],
    type: "research",
  },
  {
    title: "Founding Member and Research Participant",
    organization: "RoboLab@Bucknell",
    location: "Lewisburg, PA",
    period: "Sep 2023 - Present",
    description: [
      "Participate in weekly research seminars exploring human-robot trust, automation bias, and ethical implications of autonomous systems",
      "Contribute to discussions on experimental design for HRI studies, bringing technical perspective to psychological research questions",
    ],
    type: "research",
  },
  {
    title: "Teaching Assistant - Software Engineering & Design",
    organization: "Computer Science Department, Bucknell University",
    location: "Lewisburg, PA",
    period: "Jan 2024 - Present",
    description: [
      "Mentor 150+ students in software engineering principles, design patterns, and collaborative development practices",
      "Developed automated testing frameworks with personalized feedback, improving learning outcomes while streamlining assessment processes",
      "Created supplementary materials connecting theoretical concepts to real-world applications, drawing from industry experience",
      "Hold regular office hours and code review sessions, fostering deep understanding of software architecture principles",
    ],
    type: "teaching",
  },
  {
    title: "Computer Science Tutor",
    organization: "Engineering Study Spot, Bucknell University",
    location: "Lewisburg, PA",
    period: "Aug 2024 - Dec 2024",
    description: [
      "Provided one-on-one tutoring across the entire computer science curriculum, from introductory programming to advanced algorithms",
      "Developed personalized learning strategies for students with diverse backgrounds and learning styles",
    ],
    type: "teaching",
  },
  {
    title: "Teaching Assistant - Engineering Design Experience",
    organization: "Engineering Department, Bucknell University",
    location: "Lewisburg, PA",
    period: "Aug 2023 - Dec 2023",
    description: [
      "Guided 40+ engineering students through Arduino programming and breadboard circuit design",
      "Supervised hands-on laboratory sessions involving microcontroller programming and sensor integration",
      "Facilitated discussions on engineering ethics and the societal implications of embedded system design",
    ],
    type: "teaching",
  },
  {
    title: "Teaching Assistant - Experimental Physics Laboratory",
    organization: "Physics Department, Bucknell University",
    location: "Lewisburg, PA",
    period: "Aug 2023 - May 2024",
    description: [
      "Instructed 100+ students in experimental design, data analysis, and scientific writing",
      "Emphasized connection between theoretical physics principles and experimental validation",
      "Guided students through error analysis and uncertainty quantification in experimental measurements",
    ],
    type: "teaching",
  },
  {
    title: "Software Developer",
    organization: "Riverhead Raceway",
    location: "Riverhead, NY",
    period: "Oct 2020 – Present",
    description: [
      "Architected and deployed production systems handling 250k+ monthly users and $100,000+ in payment processing",
      "Led digital transformation initiative, replacing legacy paper-based systems with modern web applications",
      "Implemented CI/CD pipelines, containerization, and infrastructure as code using Docker and GitHub Actions",
      "Developed RESTful APIs and microservices architecture for scalable, maintainable systems",
    ],
    type: "professional",
  },
  {
    title: "IT Administrator",
    organization: "Riverhead Raceway",
    location: "Riverhead, NY",
    period: "Oct 2020 - Apr 2024",
    description: [
      "Modernized IT infrastructure from consumer to enterprise-grade systems, improving uptime to 99.9%",
      "Implemented comprehensive backup and disaster recovery protocols protecting critical business data",
      "Automated system administration tasks using PowerShell and Bash scripting",
    ],
    type: "professional",
  },
  {
    title: "Information Technology Intern",
    organization: "Miller Place School District",
    location: "Miller Place, NY",
    period: "Sep 2020 - May 2022",
    description: [
      "Supported 1000+ students and faculty during COVID-19 transition to remote learning",
      "Deployed and maintained educational technology platforms and troubleshooted hardware/software issues",
    ],
    type: "professional",
  },
  {
    title: "Former President, Current Electrical/Mechanical Team Lead",
    organization: "AIChE Chem-E-Car Competition Team, Bucknell University",
    location: "Lewisburg, PA",
    period: "Jan 2023 – Present",
    description: [
      "Led 15-member interdisciplinary team in designing autonomous chemical-powered vehicles for national competition",
      "Introduced agile development methodologies and version control practices to hardware development process",
      "Mentored junior members in embedded systems programming and control theory",
    ],
    type: "leadership",
  },
  {
    title: "Co-Founder and Treasurer",
    organization: "Bucknell Coffee Society",
    location: "Lewisburg, PA",
    period: "Oct 2023 – Present",
    description: [
      "Co-established campus organization promoting coffee education and community building",
      "Manage $5,000+ annual budget, coordinate events, and maintain vendor relationships",
      "Organized educational workshops on coffee science, brewing techniques, and sustainability",
    ],
    type: "leadership",
  },
];

export const awards: Award[] = [
  {
    title: "Dean's List (5 semesters)",
    organization: "Bucknell University",
    year: 2024,
    description: "Fall 2022, Fall 2023, Spring 2024, Fall 2024, Spring 2025",
  },
  {
    title: "AIChE Mid-Atlantic Chem-E-Car Competition",
    organization: "AIChE",
    year: 2024,
    description: "2nd Place",
  },
];

export const conferences = [
  {
    title: "IEEE RO-MAN 2025",
    location: "Eindhoven, The Netherlands",
    date: "Aug 2025",
    presentation:
      "A Web-Based Wizard-of-Oz Platform for Collaborative and Reproducible Human-Robot Interaction Research",
  },
  {
    title: "IEEE RO-MAN 2024",
    location: "Pasadena, CA",
    date: "Aug 2024",
    presentation:
      "HRIStudio: A Framework for Wizard-of-Oz Experiments in HRI Studies (Late Breaking Report)",
  },
  {
    title: "AIChE Annual Student Conference",
    location: "San Diego, CA",
    date: "Oct 2024",
    presentation:
      "Chem-E-Car Performance Competition with autonomous hydrogen fuel cell vehicle",
  },
  {
    title: "AIChE Mid-Atlantic Regional Conference",
    location: "UMBC, Baltimore, MD",
    date: "Apr 2024",
    presentation: "Chem-E-Car Performance Competition - 2nd Place overall",
  },
];

export const technicalSkills = {
  "Programming Languages": [
    "Python",
    "C/C++",
    "JavaScript/TypeScript",
    "Java",
    "MATLAB",
    "SQL",
    "Bash",
    "LaTeX",
  ],
  "Robotics & HRI": [
    "ROS/ROS2",
    "Gazebo",
    "NAO/Pepper SDK",
    "WebSockets",
    "Robot Operating System (ROS)",
  ],
  "Machine Learning & AI": [
    "PyTorch",
    "TensorFlow",
    "scikit-learn",
    "LightGBM",
    "XGBoost",
    "OpenCV",
    "pandas",
    "numpy",
    "Jupyter",
  ],
  "Research Tools": [
    "Git/GitHub",
    "Docker",
    "Statistical Analysis (R)",
    "Experimental Design",
    "Data Visualization",
  ],
  "Web & Systems": [
    "React",
    "Node.js",
    "Next.js",
    "REST APIs",
    "PostgreSQL",
    "Linux",
    "Cloud Computing",
    "Distributed Systems",
  ],
  "Hardware/Embedded": [
    "Arduino",
    "Raspberry Pi",
    "I2C/SPI",
    "Sensor Integration",
    "Real-time Systems",
  ],
};

export const relevantCoursework = [
  "Artificial Intelligence & Data Science: Data Mining, Algorithm Design & Analysis",
  "Systems & Software Engineering: Software Engineering & Design, Computer Systems, Operating Systems Design, Programming Language Design",
  "Research & Analysis: Research Methods in Computer Science, Probability & Statistics, Experimental Design",
  "Mathematics & Theory: Linear Algebra, Discrete Mathematics",
  "Networks & Security: Computer Networks & Security",
];

export const projects: Project[] = [
  {
    title: "Nand2Tetris Implementation (ECEG 431)",
    description:
      "A complete implementation of a general-purpose computer system, from NAND gates to a high-level object-oriented compiler.",
    longDescription:
      "Built a complete computer system from the ground up as part of the Nand2Tetris course (ECEG 431). Starting with a single NAND gate, I designed and simulated all hardware components including logic gates, ALU, RAM, and the CPU. On the software side, I developed an assembler, a virtual machine translator, and a compiler for a high-level object-oriented language, culminating in a fully functional Operating System. This project provided a deep, demystified understanding of how computers actually work under the hood.",
    tags: [
      "Computer Architecture",
      "Hardware Simulation",
      "Compiler Design",
      "Python",
      "Assembly",
      "Virtual Machine",
      "Operating Systems",
    ],
    link: "/blog/eceg431",
    gitLink: "https://github.com/soconnor0919/eceg431",
    image: "/images/nand2tetris.png",
    imageAlt: "Diagram of the Hack Computer architecture",
    featured: true,
  },
  {
    title: "Lewisburg, PA Coffee Map",
    description:
      "A website showing off the best coffee shops in Lewisburg, PA.",
    longDescription:
      "Aggregates coffee shop data from various sources and displays it in a user-friendly interface. Use it to find your next brew!",
    tags: ["Coffee", "Lewisburg, PA", "Bucknell"],
    link: "https://lewisburgcoffee.soconnor.dev",
    gitLink: "https://github.com/soconnor0919/lewisburg-coffee",
    image: "/images/lewisburg-coffee.png",
    imageAlt: "Screenshot of the Lewisburg, PA Coffee Map website",
    featured: true,
  },
  {
    title: "PDF2MD",
    description:
      "A web application that converts PDFs to Markdown files.",
    longDescription:
      "Uses OCR and PDF parsing to extract text and convert it to Markdown, for easy editing and formatting.",
    tags: ["PDF", "Markdown", "OCR"],
    link: "https://pdf2md.coolify.soconnor.dev",
    gitLink: "https://github.com/soconnor0919/pdf2md",
    image: "/images/pdf2md.png",
    imageAlt: "Screenshot of the PDF2MD website",
    featured: true,
  },
  {
    title: "HRIStudio",
    description:
      "A modular web-based experimental platform for human-robot interaction studies using the Wizard of Oz experimental paradigm.",
    longDescription:
      "Architected full-stack web application for managing HRI experiments with real-time robot control interfaces. Implemented WebSocket-based bidirectional communication protocols for low-latency robot teleoperation. Designed RESTful API leveraging Robot Operating System with JSON-defined plugins for extensibility across multiple robot platforms. Created comprehensive logging system capturing interaction data, timestamps, and experimental conditions for reproducibility. Technologies: Next.js, React, TypeScript, Node.js, WebSockets, PostgreSQL, Docker.",
    tags: [
      "ROS2",
      "React",
      "TypeScript",
      "C++",
      "Python",
      "WebSockets",
      "Next.js",
      "PostgreSQL",
      "Docker",
    ],
    gitLink: "https://github.com/soconnor0919/hristudio",
    image: "/hristudio_laptop.png",
    imageAlt:
      "Screenshot of HRIStudio application showing the robot control dashboard on a laptop",
    featured: true,
  },
  {
    title: "Autonomous Vehicle Control System - Chem-E-Car Competition",
    description:
      "Custom microcontroller-based control system for hydrogen fuel cell regulation and reaction monitoring.",
    longDescription:
      "Designed embedded control system for autonomous hydrogen fuel cell-powered vehicle using finite state machine architecture. Implemented real-time sensor fusion combining spectrometer readings and power monitoring with calculated stopping algorithms. Developed PlatformIO-based build system with hardware abstraction layer for testing and simulation. Achieved precise distance control (±10cm) through chemical reaction timing at AIChE National Competition. Technologies: C++, Arduino, PlatformIO, I2C/SPI protocols, finite state machines.",
    tags: [
      "C++",
      "Embedded Systems",
      "Hardware Design",
      "Arduino",
      "PlatformIO",
      "I2C/SPI",
    ],
    gitLink: "https://github.com/soconnor0919/national_fa24",
    image: "/car.png",
    imageAlt:
      "Photo of the Chem-E-Car with custom control system hardware visible, showing the microcontroller and sensor connections",
    featured: true,
  },
  {
    title: "Formula One Performance Prediction Using Machine Learning",
    description:
      "Machine learning project analyzing Formula One race data to predict lap times based on weather conditions and track characteristics.",
    longDescription:
      "Developed ensemble machine learning models (LightGBM, XGBoost, Random Forest) to predict F1 lap times with high accuracy. Engineered features from weather data, track characteristics, and historical performance using domain knowledge. Implemented cross-validation and hyperparameter optimization for model evaluation across multiple racing circuits. Analyzed feature importance to understand factors influencing racing performance. Technologies: Python, LightGBM, XGBoost, Random Forest, pandas, scikit-learn, FastF1 API.",
    tags: [
      "Python",
      "Machine Learning",
      "Data Science",
      "LightGBM",
      "XGBoost",
      "Random Forest",
      "FastF1",
      "Jupyter",
    ],
    gitLink: "https://github.com/soconnor0919/f1-race-prediction",
    featured: true,
  },
  {
    title: "Real-time Racing Statistics Platform",
    description:
      "A comprehensive web platform for Riverhead Raceway, a local motorsports track in New York, serving 1500+ concurrent users during race events.",
    longDescription:
      "Built production system serving 1500+ concurrent users and 250k+ monthly visitors. Implemented WebSocket-based real-time data streaming with automatic reconnection and state synchronization. Designed responsive UI with accessibility features meeting WCAG 2.1 AA standards. Optimized database queries reducing page load times by 60% through intelligent caching and indexing. Technologies: Next.js, TypeScript, PostgreSQL, Docker, DigitalOcean.",
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Auth.js",
      "Tailwind CSS",
      "WebSockets",
      "Docker",
    ],
    websiteLink: "https://riverheadraceway.com",
    image: "/images/racehub.png",
    imageAlt: "Screenshot of the RaceHub Next platform",
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
    gitLink: "https://github.com/soconnor0919/beenvoice",
    websiteLink: "https://beenvoice.soconnor.dev",
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
    gitLink: "https://github.com/soconnor0919/personal-website",
    websiteLink: "https://soconnor.dev",
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
    link: "/blog/accessibility",
    featured: true,
  },
  {
    title: "LaTeX Introduction Tutorial",
    description:
      "A 5-minute introduction to LaTeX document preparation system for academic and technical writing.",
    longDescription:
      "Created an accessible tutorial video explaining LaTeX, a typesetting system commonly used for technical and scientific documents in academia. The video covers how to set up Overleaf as an editor, explains key LaTeX tags and formatting, demonstrates both inline and display math equations, and provides a complete walkthrough of creating your first document with proper formatting.",
    tags: ["LaTeX", "Tutorial", "Accessibility", "Education", "Overleaf"],
    link: "/blog/latex-intro",
    image: "/latex-thumbnail.jpg",
    imageAlt:
      "Decorative thumbnail showing the project title 'Getting Started with LaTeX'",
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
