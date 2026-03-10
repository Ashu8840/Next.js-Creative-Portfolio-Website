/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "Chor Sipahi Game",
    description:
      "Interactive multiplayer game with role-based assignments and real-time gameplay using WebSockets. UI built with React, server logic in Node.js/Express.js, and MongoDB for data persistence.",
    date: "2023-06-10",
    demoLink: "https://github.com/Ashu8840",
  },
  {
    id: 2,
    name: "Personal Diary App",
    description:
      "Full-stack CRUD app with Google OAuth 2.0 authentication, allowing users to store, edit, and delete personal journal entries.",
    date: "2023-08-20",
    demoLink: "https://github.com/Ashu8840",
  },
  {
    id: 3,
    name: "MERN Chat Application",
    description:
      "Real-time chat app with Google authentication using @react-oauth/google and WebSockets for instant messaging.",
    date: "2023-10-15",
    demoLink: "https://github.com/Ashu8840",
  },
  {
    id: 4,
    name: "Wandring Car Game",
    description:
      "Car racing game built using MERN stack, featuring authentication, multiple states, and optimized transitions between game screens.",
    date: "2024-01-05",
    demoLink: "https://github.com/Ashu8840",
  },
  {
    id: 5,
    name: "Hospital Report System",
    description:
      "Hospital Report Generation System developed during internship using MERN stack with backend functionalities for seamless data management and optimized data retrieval.",
    date: "2023-04-01",
    demoLink: "https://github.com/Ashu8840",
  },
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://www.github.com/Ashu8840",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://linkedin.com/in/ayush-tripathi-746018308",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Resume",
    link: "https://drive.google.com/file/d/1lZYie-5CKWHzSGQN-8wEv1G60Yb6jQwl/view?usp=sharing",
    icon: "resume",
    newTab: true,
  },
];
