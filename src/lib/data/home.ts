export const heroStats = [
  { end: 4, suffix: "plus" as const, title: "Years Of Experience" },
  { end: 20, suffix: "plus" as const, title: "Projects Completed" },
  { end: 99, suffix: "percent" as const, title: "Client Satisfaction" },
];

export const resumeItems = [
  { years: "2026 - Present", role: "Full-Stack Developer", company: "Devnnova" },
  { years: "2025", role: "Full-Stack Developer", company: "TechVerse" },
  { years: "2023 - 2025", role: "Mobile & Web Developer", company: "Ecobank Nigeria" },
  { years: "2020 - 2022", role: "UI/UX Designer", company: "Hephzibah Edutech" },
];

export const services = [
  { number: "01.", title: "Website Design & Development" },
  { number: "02.", title: "Brand Identity Design" },
  { number: "03.", title: "Mobile App Development" },
  { number: "04.", title: "UI/UX & Product Design" },
  { number: "05.", title: "AI Chatbots & Integrations" },
  { number: "06.", title: "Business Workflow Automation" },
];

export const skills = [
  { img: "/assets/images/skills/skill1.png", name: "React / Next.js", percent: "95%" },
  { img: "/assets/images/skills/skill2.png", name: "React Native", percent: "90%" },
  { img: "/assets/images/skills/skill3.png", name: "Node.js / NestJS", percent: "92%" },
  { img: "/assets/images/skills/skill4.png", name: "TypeScript", percent: "93%" },
  { img: "/assets/images/skills/skill5.png", name: "Figma / UI Design", percent: "88%" },
  { img: "/assets/images/skills/skill6.png", name: "PostgreSQL / MongoDB", percent: "87%" },
  { img: "/assets/images/skills/skill7.png", name: "n8n / Automations", percent: "85%" },
  { img: "/assets/images/skills/skill8.png", name: "AI / LLM Integration", percent: "90%" },
];

export const featuredProjects = [
  {
    img: "/assets/images/projects/project1.jpg",
    category: "UI/UX - Mobile App - Website",
    title: "Yummeals - Food & Feedback Platform",
    href: "https://yummealsapp.com/",
    desc: "Designed and built the full product: UI/UX, mobile app and website, including a multi-step NPS feedback system that lifted completion rates.",
  },
  {
    img: "/assets/images/projects/project2.jpg",
    category: "Mobile - Website - Automations",
    title: "Entrant - Newcomer Platform",
    href: "https://www.myentrant.com/",
    desc: "Full-stack platform for newcomers: React Native + Next.js frontends, NestJS backend, CMS admin portal, social content and AI-powered automations.",
  },
  {
    img: "/assets/images/projects/project3.jpg",
    category: "Website",
    title: "Devnnova - Agency Website",
    href: "https://devnnova.com/",
    desc: "Modern agency website built with Next.js and Tailwind CSS: fast, responsive and built to convert visitors into clients.",
  },
  {
    img: "/assets/images/projects/project4.jpg",
    category: "Website",
    title: "MaxDrive - Mobility Platform",
    href: "https://maxdriveme.com/",
    desc: "Marketing and booking website for a mobility service, designed and shipped end to end.",
  },
  {
    img: "/assets/images/projects/project1.jpg",
    category: "Website - Automation",
    title: "Esther Olatunji Foundation - NGO Website",
    href: "https://ngo-foundation-self.vercel.app/",
    desc: "NGO website with donation and volunteer workflows automated end to end.",
  },
];

export const testimonials = [
  {
    img: "/assets/images/testimonials/author1.png",
    text: "Prosper took our idea from a rough sketch to a live product: design, build and launch, without us needing anyone else.",
    name: "Startup Founder",
    role: "Founder",
  },
  {
    img: "/assets/images/testimonials/author2.png",
    text: "Fast, communicative and end-to-end. He set up automations that save our team hours every week.",
    name: "Operations Lead",
    role: "Business Owner",
  },
];

export const pricing = [
  {
    title: "Launch Pack",
    save: "Best for new businesses",
    price: "1,000",
    features: [
      { label: "Logo & Brand Kit", enabled: true },
      { label: "5-Page Business Website", enabled: true },
      { label: "Social Profiles Setup", enabled: true },
      { label: "Mobile App (MVP)", enabled: false },
      { label: "Workflow Automations", enabled: false },
    ],
  },
  {
    title: "Startup Pack",
    save: "Most popular",
    price: "4,000",
    features: [
      { label: "Logo & Brand Kit", enabled: true },
      { label: "Business Website", enabled: true },
      { label: "Social Profiles Setup", enabled: true },
      { label: "Mobile App (MVP)", enabled: true },
      { label: "Workflow Automations", enabled: true },
    ],
  },
  {
    title: "Growth Retainer",
    save: "Monthly",
    price: "300",
    features: [
      { label: "Site Updates & Support", enabled: true },
      { label: "New Design Assets", enabled: true },
      { label: "Automation Maintenance", enabled: true },
      { label: "AI Chatbot Support", enabled: true },
      { label: "Priority Response", enabled: true },
    ],
  },
];

export const blogPosts = [
  {
    img: "/assets/images/blog/blog1.png",
    tags: ["Automation", "AI"],
    title: "How Small Businesses Save Hours With Simple Automations",
    date: "July 2026",
  },
  {
    img: "/assets/images/blog/blog2.png",
    tags: ["Web", "Branding"],
    title: "Why Your Startup Needs A Website Before Anything Else",
    date: "July 2026",
  },
];

export const clientLogos = Array.from({ length: 10 }, (_, i) => ({
  img: `/assets/images/client-logos/client-logo${i + 1}.png`,
}));
