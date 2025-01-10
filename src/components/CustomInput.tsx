import React, { HTMLInputTypeAttribute } from "react";

type Props = {
  name: string;
  placeholder: string;
  changeHandler: (text: string) => void;
  type?: HTMLInputTypeAttribute;
  value: string
};

const CustomInput = ({ name,value, placeholder, type, changeHandler }: Props) => {
  return (
    <div className="flex flex-col gap-[6px]">
      <label htmlFor={name} className="text-[15px] font-semibold text-[rgb(130,139,162)]">{name}</label>
      <input
      className=" focus:border-b-blue-800 border-[#EFF2F9] border-2 py-3 px-2 outline-none rounded-md bg-[#EFF2F9]"
        type={type || "text"}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(event) => changeHandler(event.target.value)}
      />
    </div>
  );
};

export default CustomInput;
