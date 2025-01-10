import professionalIcon from "@/assets/one.svg";
import { StaticImageData } from "next/image";

interface resume_templates_categories {
  iconSrc: string | StaticImageData;
  name: template_categories_names;
}

export const TEMPLATE_CATEGORIES: resume_templates_categories[] = [
  {
    iconSrc: professionalIcon,
    name: "all templates",
  },
  {
    iconSrc: professionalIcon,
    name: "professional",
  },
  {
    iconSrc: professionalIcon,
    name: "modern",
  },
  {
    iconSrc: professionalIcon,
    name: "creative",
  },
  {
    iconSrc: professionalIcon,
    name: "simple",
  },
  {
    iconSrc: professionalIcon,
    name: "picture",

  },
];

export type template_categories_names =
  | "all templates"
  | "professional"
  | "modern"
  | "creative"
  | "simple"
  | "picture";
