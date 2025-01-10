"use client";
import React, { useState } from "react";
import CustomInput from "./CustomInput";
import TextEditor from "./TextEditor";
import Collapsible from "react-collapsible";
import ChevronDownSVG from "@/icons/chevron-down.svg";
import ChevronUpSVG from "@/icons/chevron-up.svg";
import Image from "next/image";

type Props = {
  firstlabel: string;
  secondlabel: string;
  thirdlabel: string;
  fourthlabel: string;
  lastlabel: string;
};

const CustomCollapsible = ({
  firstlabel,
  secondlabel,
  thirdlabel,
  fourthlabel,
  lastlabel,
}: Props) => {
  const [firstLabel, setFirstLabel] = useState("");
  const [secondLabel, setSecondLabel] = useState("");
  const [thirdOneRaw, setThirdOneRaw] = useState(""); // Raw value for the first date input
  const [thirdTwoRaw, setThirdTwoRaw] = useState(""); // Raw value for the second date input
  const [thirdOneLabel, setThirdOneLabel] = useState(""); // Formatted value for the first date
  const [thirdTwoLabel, setThirdTwoLabel] = useState(""); // Formatted value for the second date
  const [fourthLabel, setFourthLabel] = useState("");
  const [lastLabel, setLastLabel] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Function to get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  // Check if a date is today
  const isToday = (rawDate: string) => rawDate === getTodayDate();

  const handleDateChange = (rawDate: string, key: string) => {
    if (!rawDate) {
      if (key === "one") {
        setThirdOneRaw("");
        setThirdOneLabel("");
      }
      if (key === "two") {
        setThirdTwoRaw("");
        setThirdTwoLabel("");
      }
      return;
    }

    const date = new Date(rawDate); // Convert raw date to Date object
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }); // Format date

    if (key === "one") {
      setThirdOneRaw(rawDate); // Update raw value
      setThirdOneLabel(formattedDate); // Update formatted value
    } else if (key === "two") {
      setThirdTwoRaw(rawDate); // Update raw value
      // Display "Present" if the date is today
      setThirdTwoLabel(isToday(rawDate) ? "Present" : formattedDate);
    }
  };

  return (
    <Collapsible
      className=""
      onOpen={() => setIsCollapsed(true)}
      onClose={() => setIsCollapsed(false)}
      transitionTime={200}
      open={true}
      trigger={
        <div className="flex p-5 font-semibold justify-between">
          <div>
            <h2>
              {firstLabel ?? secondLabel
                ? `${firstLabel} ${secondLabel && "at " + secondLabel}`
                : "(No information)"}
            </h2>
            <p>{`${
              thirdOneLabel &&
              thirdOneLabel.split(" ")[0] +
                "," +
                thirdOneLabel.split(" ")[2].slice(-2)
            } ${
              thirdTwoLabel === "Present"
                ? " - Present"
                : thirdTwoLabel &&
                  "- " +
                    thirdTwoLabel.split(" ")[0] +
                    "," +
                    thirdTwoLabel.split(" ")[2].slice(-2)
            }`}</p>
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
      <div className="flex flex-col gap-5 p-5">
        <div className="grid grid-cols-2 gap-5">
          <CustomInput
            value={firstLabel}
            changeHandler={(text: string) => setFirstLabel(text)}
            name={firstlabel}
            placeholder=""
          />
          <CustomInput
            value={secondLabel}
            changeHandler={(text: string) => setSecondLabel(text)}
            name={secondlabel}
            placeholder=""
          />
          <div>
            <label className="text-[15px] font-semibold text-[rgb(130,139,162)]">
              {thirdlabel}
            </label>
            <div className="flex gap-2">
              <CustomInput
                value={thirdOneRaw} // Use raw value for input
                changeHandler={(text: string) => handleDateChange(text, "one")}
                name={""}
                placeholder=""
                type="date"
              />
              <CustomInput
                value={thirdTwoRaw} // Use raw value for input
                changeHandler={(text: string) => handleDateChange(text, "two")}
                name={""}
                placeholder=""
                type="date"
              />
            </div>
          </div>
          <CustomInput
            value={fourthLabel}
            changeHandler={(text: string) => setFourthLabel(text)}
            name={fourthlabel}
            placeholder=""
          />
        </div>
        <TextEditor optionalLabel={lastlabel} />
      </div>
    </Collapsible>
  );
};

export default CustomCollapsible;
