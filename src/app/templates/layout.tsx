"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  TEMPLATE_CATEGORIES,
  template_categories_names,
} from "@/constants/templatesCategories";
import TemplateCategory from "@/components/TemplateCategory";
import { useParams } from "next/navigation";

const TemplateLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { id: urlpathname } = useParams();
  const [currentActiveCategory, setActiveCurrentCategory] =
    useState<template_categories_names>(
      (urlpathname as template_categories_names) || "all templates"
    );

  console.log(urlpathname, currentActiveCategory, "thhis is fucking pathname");

  useEffect(() => {
    if (urlpathname) {
      const newPathname =
        TEMPLATE_CATEGORIES.find((category) => category.name === urlpathname)
          ?.name || "all templates";
      setActiveCurrentCategory(newPathname);
    }
  }, [urlpathname]);
  return (
    <>
      <Header />
      <main className="grow max-w-[1200px] m-auto">
        <section className="relative flex flex-col items-center gap-[50px] py-[52px] ">
          <div className="max-w-[800px] flex flex-col gap-[28px] items-center justify-center">
            <div className="text-center flex flex-col gap-[15px]">
              <div className="max-w-[730px] text-[45px] font-bold leading-[1.125] tracking-[-0.05px]">
                <h1>Job-winning curated resume Templates</h1>
              </div>
              <p className="text-[17px] text-cu_Grey">
                Elevate your professional image with our unique creative resume
                templates, designed to highlight your creativity and set you
                apart in the job market.
              </p>
            </div>
          </div>
          <div className="flex px-[25px] gap-[25px] flex-wrap">
            {TEMPLATE_CATEGORIES.map((category) => (
              <TemplateCategory
                key={category.name}
                name={category.name}
                iconSrc={category.iconSrc}
                isActive={currentActiveCategory === category.name}
                changeActiveCategory={(newCategory) =>
                  setActiveCurrentCategory(newCategory)
                }
              />
            ))}
          </div>
        </section>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default TemplateLayout;
