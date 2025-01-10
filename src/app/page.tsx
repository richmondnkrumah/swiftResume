import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ArrowSvg from "@/assets/one.svg";
import FlashSvg from "@/assets/two.svg";
import Icon from "@/components/Icon";
import { font_DM_SANS } from "./layout";
import { CARDS } from "@/constants/landingPage";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className=""> 
        <Hero />
        <section className="grid place-items-center py-[68px] relative ">
          <div
            className={`max-w-[700px] text-[50px] font-medium  leading-[1.125] tracking-[-0.05px] flex flex-wrap gap-[10px] items-center justify-center ${font_DM_SANS.className}`}
          >
            <h1 className="inline">Turn</h1>
            <Icon
              imgSrc={ArrowSvg}
              height={30}
              width={30}
              additionalStyles="h-[45px] w-[45px] flex item-center justify-center rounded-xl"
              background="bg-gradient-to-t from-[#F5F9FF] to-[#D6E8FF]"
              alt="Logo"
            />
            <h1>Confusion</h1>
            <h1>into</h1>
            <h1>Clarity</h1>
            <h1>with</h1>
            <Icon
              imgSrc={FlashSvg}
              height={30}
              width={30}
              additionalStyles="h-[45px] w-[45px] flex item-center justify-center rounded-xl"
              background="bg-cu_Blue"
              alt="Logo"
            />
            <h1>perfect</h1>
            <h1>resumes</h1>
          </div>
          <div className="absolute z-[10] w-[1200px] h-[720px] -top-[450px] opacity-20 rounded-[1000px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#A3C0FF]  blur-[20px]"></div>
        </section>
        <section className="py-[68px] relative ">
          <div className="absolute z-[-10] w-[1200px] h-[710px] -top-[335px] opacity-20 rounded-[1000px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#A3C0FF]  blur-[20px]"></div>
          <div className="px-[28px] flex gap-[22px] justify-center">
            {CARDS.map((card) => (
              <div
                className="bg-white w-[312px] py-[30px] px-[24px] rounded-[30px] shadow-sm flex flex-col items-center justify-center text-center gap-[28px]"
                key={card.heading}
              >
                <Icon
                  imgSrc={ArrowSvg}
                  height={30}
                  width={30}
                  additionalStyles="h-[45px] w-[45px] flex item-center justify-center rounded-xl"
                  background="bg-gradient-to-t from-[#F5F9FF] to-[#D6E8FF]"
                  alt="Logo"
                />
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[22px] font-semibold text-cu_Grey">
                    {card.heading}
                  </p>
                  <p className="text-[18px] text-cu_Low_Grey">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="py-[100px] flex items-center justify-center  relative overflow-hidden">
          <div className=" w-[1200px] px-[25px]">
            <div className="max-w-[1120px] flex grow flex-col gap-[32px] z-10 items-center justify-center text-center">
              <Icon
                imgSrc={ArrowSvg}
                height={30}
                width={30}
                additionalStyles="h-[45px] w-[45px] flex item-center justify-center rounded-xl"
                background="bg-gradient-to-t from-[#F5F9FF] to-[#D6E8FF]"
                alt="Logo"
              />
              <h1 className="max-w-[500px] text-[50px] font-semibold leading-[1.125] tracking-[-0.05px]">
                Begin building your career today
              </h1>
              <Link
                href={"/templates"}
                className="font-semibold text-white text-[16px] rounded-3xl block bg-cu_Blue px-[15px] py-[7px]"
              >
                {" "}
                Choose from a Template
              </Link>
            </div>
            <div className=" absolute z-[10] w-[1100px] h-[750px] top-[50px] opacity-20 rounded-tl-[1000px] rounded-tr-[1000px] bg-gradient-to-t from-[#ffffff] to-[#C7DBFF] from-40%  blur-[5px]"></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
