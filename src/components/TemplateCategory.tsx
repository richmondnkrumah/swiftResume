import { template_categories_names } from "@/constants/templatesCategories";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const COLOR_VARIANTS = {
  professional: {
    accentBackground: "bg-[#E4F0FE]",
    accentBorder: "border-[#4E7DB0]",
    hover: "hover:bg-[#E4F0FE] hover:border-[#4E7DB0]"

  },
  creative: {
    accentBackground: "bg-[#EFFAF4]",
    accentBorder: "border-[#3E8471]",
    hover: "hover:bg-[#EFFAF4] hover:border-[#3E8471]"

  },
  picture: {
    accentBackground: "bg-[#F5ECFD]",
    accentBorder: "border-[#9172A4]",
    hover: "hover:bg-[#F5ECFD] hover:border-[#9172A4]"

  },
  "all templates": {
    accentBackground: "bg-[#FEF8E8]",
    accentBorder: "border-[#AF8235]",
    hover: "hover:bg-[#FEF8E8] hover:border-[#AF8235]"

  },
  simple: {
    accentBackground: "bg-[#FDEEF5]",
    accentBorder: "border-[#B65E86]",
    hover: "hover:bg-[#FDEEF5] hover:border-[#B65E86]"

  },
  modern: {
    accentBackground: "bg-[#FDF1EB]",
    accentBorder: "border-[#B06847]",
    hover: "hover:bg-[#FDF1EB] hover:border-[#B06847]"
  },
};
type Props = {
  iconSrc: string | StaticImageData;
  name: template_categories_names;
  isActive?: boolean;
  changeActiveCategory: (newCategory: template_categories_names) => void;
};

const TemplateCategory = ({
  iconSrc,
  name,
  isActive,
  changeActiveCategory,
}: Props) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        changeActiveCategory(name);
        router.push(
          `/templates/${name !== "all templates" ? name.replace(" ", "") : ""}`
        );
      }}
      className={`border-2 flex gap-3 px-4 py-[9px] rounded-3xl items-center justify-center capitalize cursor-pointer
        ${
          isActive
            ? `${COLOR_VARIANTS[name].accentBackground} ${COLOR_VARIANTS[name].accentBorder}`
            : `${COLOR_VARIANTS[name].hover} ${COLOR_VARIANTS[name].hover}`
        }`}
    >
      <Image
        src={iconSrc}
        height={20}
        width={20}
        alt={`${name} template category icon`}
      />
      <p>{name}</p>
    </div>
  );
};

export default TemplateCategory;
