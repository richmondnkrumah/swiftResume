import TemplateCard from "@/components/TemplateCard";
import { TEMPLATESCARDS } from "@/constants/templateCards";
import { section } from "motion/react-client";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const currentCategoryTemplateCards = TEMPLATESCARDS["all templates"];
  console.log(currentCategoryTemplateCards);
  return (
    <section className="w-full flex flex-wrap gap-x-[2%] gap-y-4 ">
      {currentCategoryTemplateCards.map((card) => (
        <TemplateCard data={card} />
      ))}
    </section>
  );
};

export default page;
