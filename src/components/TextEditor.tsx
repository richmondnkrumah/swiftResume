import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

type Props = {
  optionalLabel?: string;
};

const TextEditor = ({ optionalLabel }: Props) => {
  const [content, setContent] = useState("");

  // Quill modules configuration
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  return (
    <div className="flex flex-col gap-[6px] ">
      <label className="text-[18px] font-semibold text-cu_Grey">{optionalLabel}</label>
      <ReactQuill
        className="min-h-[200px] bg-[#EFF2F9] rounded-xl "
        theme="bubble"
        formats={[
          "bold",
          "italic",
          "underline",
          "strike",
          "blockquote",
          "list",
          "bullet",
          "link",
        ]}
        placeholder="Write something amazing..."
        modules={modules}
        onChange={setContent} // Handle text editor content changes
        value={content}

      />
    </div>
  );
};

export default TextEditor;
