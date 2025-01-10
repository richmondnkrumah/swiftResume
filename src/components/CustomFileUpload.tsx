import React, { useState } from "react";

const CustomFileInput = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex items-center gap-4">
      {/* Circular Preview */}
      <div
        className=" h-full w-24 rounded-xl bg-[#EFF2F9] flex items-center justify-center overflow-hidden border-2 border-[#EFF2F9]"
        style={{
          backgroundImage: imageSrc ? `url(${imageSrc})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {!imageSrc && <span className="text-gray-500">No Image</span>}
      </div>

      {/* File Input and Button */}
      <div>
        <label
          htmlFor="file-upload"
          className=" text-blue-500 rounded cursor-pointer font-bold"
        >
          Pick Image
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default CustomFileInput;
