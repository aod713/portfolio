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
  name: "Abi Prospa",
  logo: "/assets/images/logos/logo.png",
  email: "Abiodunprosper07@gmail.com",
  phone: "+234 703 915 7861",
  address: "Lagos, Nigeria - Working worldwide (remote)",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/abiodun-prosper-aa1428261/", icon: "fab fa-linkedin-in" },
    { label: "X", href: "https://x.com/Abi_Prospa", icon: "fab fa-twitter" },
    { label: "Instagram", href: "https://www.instagram.com/abi_prosper/", icon: "fab fa-instagram" },
    { label: "TikTok", href: "https://www.tiktok.com/@abiprosper", icon: "fab fa-tiktok" },
  ],
};
