"use client";
import React, { useState } from "react";
import CustomInput from "./CustomInput";
import Collapsible from "react-collapsible";
import ChevronDownSVG from "@/icons/chevron-down.svg";
import ChevronUpSVG from "@/icons/chevron-up.svg";
import Image from "next/image";

type Props = {
  firstlabel: string;
  secondlabel: string;
  isWritten: boolean;
};
const DEGREE = {
  "1": {
    color: "bg-blue-500",
    name: "Novice",
    accent: "bg-blue-500/50",
  },
  "2": {
    color: "bg-green-500",
    name: "Beginner",
    accent: "bg-green-500/50",
  },
  "3": { color: "bg-purple-500", name: "Skillful", accent: "bg-purple-500/50" },

  "4": {
    color: "bg-yellow-500",
    name: "Experienced",
    accent: "bg-yellow-500/50",
  },

  "5": { color: "bg-orange-500", name: "Expert", accent: "bg-orange-500/50" },
};
const CustomShortCollapsible = ({
  firstlabel,
  secondlabel,
  isWritten,
}: Props) => {
  const [firstLabel, setFirstLabel] = useState("");
  const [secondLabel, setSecondLabel] = useState("");
  const [level, setLevel] = useState<number>(1);

  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Collapsible
      className="py-5"
      openedClassName="py-5"
      onOpen={() => setIsCollapsed(true)}
      onClose={() => setIsCollapsed(false)}
      transitionTime={200}
      open={true}
      trigger={
        <div className="flex px-5  font-semibold justify-between">
          <div>
            <h2>{`${firstLabel ? firstLabel : "(Not Specified)"}`}</h2>
            {!isWritten ? (
              <p>{DEGREE[level as unknown as keyof typeof DEGREE].name}</p>
            ) : (
              <p className="h-2"> {`${secondLabel}`}</p>
            )}
          </div>
          <div>
            {isCollapsed ? (
              <Image
                className="w-6 h-6"
                height={30}
                width={30}
                src={ChevronUpSVG}
                alt="Chevron Down Svg Icon"
              />
            ) : (
              <Image
                className="w-6 h-6"
                height={30}
                width={30}
                src={ChevronDownSVG}
                alt="Chevron Down Svg Icon"
              />
            )}
          </div>
        </div>
      }
    >
      <div className="px-5 pt-7">
        <div className="grid grid-cols-2 gap-5">
          <CustomInput
            value={firstLabel}
            changeHandler={(text: string) => setFirstLabel(text)}
            name={firstlabel}
            placeholder=""
          />
          {isWritten ? (
            <CustomInput
              name={secondlabel}
              value={secondLabel}
              changeHandler={(text) => setSecondLabel(text)}
              placeholder=""
            />
          ) : (
            <div className="flex gap-2 flex-col bg-[rgba(235,242,255,1)">
              <label
                htmlFor=""
                className="text-[15px] font-semibold text-[rgb(130,139,162)]"
              >
                {secondlabel} -{" "}
                {DEGREE[level as unknown as keyof typeof DEGREE].name}
              </label>
              <div
                className={`flex rounded-md h-full transition-all ${
                  DEGREE[level as unknown as keyof typeof DEGREE].accent
                }`}
              >
                {Array.from({ length: 5 }, (_, idx) => (
                  <span
                    key={idx}
                    onClick={() => setLevel(idx + 1)}
                    className={`w-full full rounded-md transition-all  ${
                      level !== idx + 1 && `hover:bg-inherit cursor-pointer`
                    }
              ${
                idx + 1 === level &&
                DEGREE[`${idx + 1}` as keyof typeof DEGREE].color
              }  
                block`}
                  ></span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Collapsible>
  );
};

export default CustomShortCollapsible;
