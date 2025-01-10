import { templates_cards } from "@/constants/templateCards";
import Image from "next/image";
import React from "react";
import classicResume from "../../public/templates/images/Classic-Resume-Template-Brick-Red-Hub.png";

type Props = {
  data: templates_cards;
};

const TemplateCard = ({ data }: Props) => {
  return (
    <div className="w-[32%]">
      <div className="p-5 rounded-2xl bg-[rgba(235,242,255,0.5)] ">
        <Image
          className="h-[500px] w-full "
          src={data.imgSrc}
          alt={`${data.name} template image`}
        />
        <div className="py-2 ">
          <h2  className="text-[20px] font-bold text-cu_Grey capitalize" >{data.name}</h2>
          <p className="text-[16px] text-cu_Low_Grey">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
