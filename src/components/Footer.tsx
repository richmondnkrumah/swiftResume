import React from "react";
import Icon from "./Icon";
import ArrowSvg from "@/assets/one.svg";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="pt-[48px] justify-center flex pb-[30px] px-[25px] ">
      <div className="grow max-w-[1200px] flex flex-col gap-[55px]">
        <div className="flex justify-between">
          <div className="flex gap-5 items-center h-fit ">
            {" "}
            <Icon
              imgSrc={ArrowSvg}
              height={30}
              width={30}
              additionalStyles="h-[45px] w-[45px] flex item-center justify-center rounded-xl"
              background="bg-gradient-to-t from-[#F5F9FF] to-[#D6E8FF]"
              alt="Logo"
            />
            <h2 className="font-bold">SwiftResume</h2>
          </div>
          <div className="flex flex-col gap-[10px]">
            <h2 className="text-[20px] font-semibold text-cu_Grey">
              Quick Links
            </h2>
            <p className="text-[18px] text-cu_Low_Grey">Templates</p>
            <p className="text-[18px] text-cu_Low_Grey">Contact Us</p>
          </div>
        </div>
        <div className=" flex justify-between border-t-[0.5px] border-t-[[rgba(31,31,31,0.1)] pt-[20px]">
          <div className="text-[18px] text-cu_Low_Grey">Copyright @2024</div>
          <div className="flex gap-3">
            <p className="text-[18px] text-cu_Low_Grey">Terms</p>
            <p className="text-[18px] text-cu_Low_Grey">Privacy Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
