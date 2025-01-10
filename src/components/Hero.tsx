import React from "react";
import Icon from "./Icon";
import stars from "@/assets/stars.svg";
import Link from "next/link";
import Image from "next/image";
import HeroImage from '@/assets/hero.png'
type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="relative flex flex-col items-center gap-[100px] py-[52px] ">
      <div className="absolute z-[-10] w-[1200px] h-[770px] bottom-[455] rounded-[1000px] bg-gradient-to-t from-cu_Off_Sky to-70% blur-[20px]">
      </div>
      <div className="max-w-[800px] flex flex-col gap-[28px] items-center justify-center">
        <div className="flex gap-[15px]">
          <Icon
            imgSrc={stars}
            height={104}
            width={120}
            alt="stars rating"
            background="bg-transparent"
            additionalStyles=""
          />
          <span>|</span>
          <p>Top Rated by Users</p>
        </div>
        <div className="text-center flex flex-col gap-[15px]">
          <div className="max-w-[730px] text-[55px] font-semibold leading-[1.125] tracking-[-0.05px]">
            <h1>
              Build careers with resumes that stand out{" "}
            </h1>
          </div>
          <p className="text-[22px] text-cu_Grey">Create, edit, and export professional resumes effortlessly</p>
        </div>
        <div>
        <Link href={'/templates'} className="font-semibold text-white text-[16px] rounded-3xl block bg-cu_Blue px-[15px] py-[7px]">Create my resume</Link>
        </div>
      </div>
      <div className="rounded-[20px] shadow-sm">
        <Image width={1000} height={716} src={HeroImage} alt="hero Image"/>
      </div>
    </section>
  );
};

export default Hero;
