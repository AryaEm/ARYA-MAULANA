import { NavItem, SocialLink } from "@/types";

export const navItems: NavItem[] = [
  { id: "home", label: "Index", index: "00" },
  { id: "about", label: "Journey", index: "01" },
  { id: "projects", label: "Work", index: "02" },
  { id: "contact", label: "Contact", index: "03" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/aryaem",
    iconName: "Github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/arya-maulana-86a087285",
    iconName: "Linkedin",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/devby.em",
    iconName: "Instagram",
  },
];

export const DIRECT_LINKS = [
  {
    label: "Email",
    value: "ary4maulanaa@email.com",
    // href: "mailto:ary4maulanaa@email.com",
    icon: "ti-mail",
    badge: "Primary",
  },
  {
    label: "WhatsApp",
    value: "+62 818-XXXX-XXXX",
    href: "https://wa.me/6281804748037",
    icon: "ti-brand-whatsapp",
    badge: "Fastest",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/Arya-Maulana",
    href: "https://www.linkedin.com/in/arya-maulana-86a087285/",
    icon: "ti-brand-linkedin",
  },
  {
    label: "GitHub",
    value: "github.com/aryaem",
    href: "https://github.com/aryaem",
    icon: "ti-brand-github",
  },
];