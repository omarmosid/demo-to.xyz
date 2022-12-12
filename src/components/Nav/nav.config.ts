export type NavConfigType = {
  display: string;
  link: string;
  isExternal: boolean;
  id: string;
  children?: NavConfigType;
};

export const navConfig: NavConfigType[] = [
  {
    display: "Home",
    link: "/",
    isExternal: false,
    id: "home",
  },
  {
    display: "Another page",
    link: "/another-page",
    isExternal: false,
    id: "another-page",
  },
  {
    display: "Ecommerce",
    link: "/ecommerce",
    isExternal: false,
    id: "ecommerce",
  },
  {
    display: "Form Submission",
    link: "/form",
    isExternal: false,
    id: "form",
  },
];
