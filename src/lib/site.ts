export type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

export const routes = {
  home: "/",
  about: "/about",
  services: "/services",
  projects: "/projects",
  blog: "/blog",
  contact: "/contact",
} as const;

export const mainNav: NavItem[] = [
  { label: "Home", href: routes.home },
  { label: "About", href: routes.about },
  { label: "Services", href: routes.services },
  { label: "Projects", href: routes.projects },
  { label: "Blog", href: routes.blog },
  { label: "Contact", href: routes.contact },
];

export const siteInfo = {
  name: "Aminu Daniel",
  logo: "/assets/images/logos/logo.png",
  email: "aminud422@gmail.com",
  phone: "+353 899 698 760",
  address: "Dublin, Ireland - Working worldwide (remote)",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/Aminuodun-prosper-aa1428261/", icon: "fab fa-linkedin-in" },
    { label: "X", href: "https://x.com/Aminu_Daniel", icon: "fab fa-twitter" },
    { label: "Instagram", href: "https://www.instagram.com/Aminu_prosper/", icon: "fab fa-instagram" },
    { label: "TikTok", href: "https://www.tiktok.com/@Aminuprosper", icon: "fab fa-tiktok" },
  ],
};
