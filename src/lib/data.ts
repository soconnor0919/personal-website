import { Globe, Mail, Phone, Linkedin, Github, School } from "lucide-react";

export const name = [
  {
    first: "Sean",
    last: "O'Connor"
  }
]

export const description = "Personal website and portfolio";

export const location = [
  {
    icon: School,
    label: 'Bucknell University',
    href: 'https://bucknell.edu'
  },
  {
    label: 'Computer Science and Engineering',
  }
]

export const contact = [
  {
    icon: Mail,
    label: 'Personal Email',
    href: 'mailto:sean@soconnor.dev'
  },
  {
    icon: Mail,
    label: 'University Email',
    href: 'mailto:sso005@bucknell.edu'
  },
  {
    icon: Phone,
    label: 'Phone',
    href: 'tel:+16316016555'
  },
  {
    icon: Globe,
    label: 'Website',
    href: 'https://soconnor.dev',
    external: true
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/bu-soconnor',
    external: true
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/soconnor0919',
    external: true
  }
];

export const articles = [
  {
      title: "Positively Innovative: Robotics for Good",
      link: "https://magazine.bucknell.edu/issue/fall-2024/robotics-for-good/",
      author: "Kate Willard",
      description: "Sean O’Connor ’26 is using his interest in robotics to fuel forward-thinking research and lead important conversations about the impact robots can have on society.",
      source: "Bucknell Magazine (Fall 2024)"
  },
  {
      title: "Student Story: Sean O'Connor '26, Computer Science and Engineering",
      link: "https://www.bucknell.edu/meet-bucknell/bucknell-stories/student-stories/sean-oconnor-26-computer-science-engineering",
      author: "Sarah Downey",
      description: "At Bucknell, Sean O'Connor '26 is conducting research to improve the ways robots assist, collaborate and coexist with humans.",
      source: "Bucknell Student Stories"
  },
  {
      title: "Shaping the Future: Exploring the Social Impact of Robots",
      link: "https://magazine.bucknell.edu/college-of-engineering/2024-college-report/",
      author: "Bucknell Publications",
      description: "RoboLab provides an environment for scholarly and creative conversations.",
      source: "the Bucknell College of Engineering Report 2024"
  }
  // Add more articles as needed
];

export const projects = [
  {
    title: "HRIStudio",
    description: "A modular web-based experimental platform for human-robot interaction studies using the Wizard of Oz experimental paradigm.",
    longDescription: "Engineered a comprehensive platform that enables researchers to conduct human-robot interaction experiments without requiring extensive programming knowledge. The system integrates with ROS2 and provides a user-friendly interface for experiment design and execution.",
    tags: ["ROS2", "React", "TypeScript", "C++", "Python"],
    link: "https://github.com/soconnor0919/hristudio",
    image: "/hristudio_laptop.png",
    featured: true
  },
  {
    title: "Personal Website",
    description: "Modern, responsive personal website built with Next.js and TailwindCSS.",
    longDescription: "Designed and developed a personal portfolio website using modern web technologies. Features include responsive design, dark mode support, PDF rendering for CV display, and a clean, professional interface for showcasing projects and experience.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "React"],
    link: "https://github.com/soconnor0919/personal-website",
    featured: true
  },
  {
    title: "Race Statistics Platform",
    description: "High-performance race statistics platform serving real-time data to 1500+ concurrent users.",
    longDescription: "Developed and deployed a complete race management system that handles registration, live timing, and results distribution. The platform replaced manual processes with digital solutions, significantly improving efficiency and user experience.",
    tags: ["PHP", "MariaDB", "WebSockets", "Docker"],
    link: "https://riverheadraceway.com",
    featured: true
  },
  {
    title: "Chem-E-Car Control System",
    description: "Custom microcontroller-based control system for hydrogen fuel cell regulation and reaction monitoring.",
    longDescription: "Pioneered the team's first custom hardware solution, implementing a finite state machine architecture that integrates spectrometer readings, relay control, and LED feedback for real-time reaction monitoring.",
    tags: ["C++", "Embedded Systems", "Hardware Design"],
    link: "https://github.com/soconnor0919/national_fa24",
    image: "/car.png",
    featured: true
  },
];

export const travel = [
  {
      title: "AIChE Annual Student Conference 2024",
      description: "With the funding of Bucknell's chemical engineering department, and an amazing team, I was able to attend the 2024 AIChE Annual Student Conference and compete in the national Chem-E-Car competition.",
      images: ["/trips/asc2024/IMG_2641.png", "/trips/asc2024/IMG_2631.png", "/trips/asc2024/IMG_7987.png"],
      tags: ["Chem-E-Car", "AIChE", "Conference", "Competition"]
  },
  {
      title: "IEEE RO-MAN 2024",
      description: "I got to attend the IEEE RO-MAN 2024 conference in Pasadena, California. It was a great opportunity to present my work on my project HRIStudio, and to network with other researchers and industry professionals.",
      images: ["/trips/roman2024/IMG_3951.png", "/trips/roman2024/IMG_3978.png", "/trips/roman2024/IMG_3946.png"],
      tags: ["RO-MAN", "IEEE", "Conference", "Presentation"]
  },
  {
      title: "ENGR 290: Following da Vinci's Footsteps",
      description: "During the summer of 2024, I went on a study abroad program with about thirty of my peers. We explored Italy and France, following the footsteps of Leonardo da Vinci- evaluating the world through his lenses.",
      images: ["/trips/engr290/insta290.jpg", "/trips/engr290/P1013747.png", "/trips/engr290/_1024461.png"],
      tags: ["Italy", "France", "Study Abroad", "Engineering"]
  },
  {
      title: "SCA Specialty Coffee Expo 2024",
      description: "As a member of the executive board of the Bucknell Coffee Society, I was able to attend the Specialty Coffee Association's Specialty Coffee Expo in early 2024, traveling to Chicago, IL.",
      images: ["/trips/sca2024/group.jpeg", "/trips/sca2024/bean.png", "/trips/sca2024/plane.png"],
      tags: ["Coffee Society", "Chicago", "SCA", "Coffee"]
  },
  {
      title: "Formula 1 Gran Premio dell'Emilia Romagna 2024",
      description: "While studying abroad with Bucknell Engineering, we were lucky enough to be within a few hours of the Imola Grand Prix! A group of students went to see the race, and it was an amazing experience.",
      images: ["/trips/imola2024/IMG_2093.png", "/trips/imola2024/IMG_2050.png", "/trips/imola2024/IMG_2066.png"],
      tags: ["Racing", "Formula One", "Italy"]
  },
  {
      title: "Formula 1 British Grand Prix 2024",
      description: "As a semi-recent Formula One fan, I was very excited to have the opportunity to attend the British Grand Prix weekend in 2024. I was able to see every event- marking one of my favorite weekends, probably ever.",
      images: ["/trips/silverstone/_1035852.png", "/trips/silverstone/P1025274.png", "/trips/silverstone/_1035764.png"],
      tags: ["Racing", "Formula One", "Great Britain", "Silverstone"]
  }
];

