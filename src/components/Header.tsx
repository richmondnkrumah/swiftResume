import Link from "next/link";
import React from "react";
import Icon from "./Icon";
import logo from "@/assets/logo.svg";
type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex py-[18px] justify-center w-full h-fit">
      <div className="flex grow justify-between max-w-[1200px] items-center px-[25px]">
        <div className="flex gap-5 items-center">
          <Icon
            imgSrc={logo}
            height={25}
            width={25}
            additionalStyles="h-[38px] w-[38px] flex item-center justify-center rounded-xl"
            background="bg-cu_Blue"
            alt="Logo"
          />
          <h2 className="font-bold ">SwiftResume</h2>
        </div>
        <div className="flex gap-[32px] items-center">
          <Link href={"/contact"}> Contact Us</Link>
          <Link
            href={"/templates"}
            className="font-semibold text-white text-[16px] rounded-3xl block bg-cu_Blue px-[15px] py-[7px]"
          >
            {" "}
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
