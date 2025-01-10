'use client'
import TemplateCard from "@/components/TemplateCard";
import { TEMPLATESCARDS } from "@/constants/templateCards";
import { template_categories_names } from "@/constants/templatesCategories";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

type Props = {};

const page = ({ params }: { params: { id: string } }) => {
  const currentCategoryTemplateCards =
    TEMPLATESCARDS[params.id as template_categories_names];
  // console.log(currentCategoryTemplateCards,"did this work")
  console.log(params.id);
  const router = useRouter();
  useEffect(() => {
    // Redirect to `/templates` if the category doesn't exist
    if (!currentCategoryTemplateCards) {
      router.push("/templates");
    }
  }, [currentCategoryTemplateCards, router]);

  if (!currentCategoryTemplateCards) {
    return null; // Prevent rendering anything while redirecting
  }
  return (
    <section className="w-full flex flex-wrap gap-x-[2%] gap-y-4 ">
      {currentCategoryTemplateCards.map((card) => (
        <TemplateCard data={card} />
      ))}
    </section>
  );
};

export default page;
