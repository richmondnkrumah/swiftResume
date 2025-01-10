import React from "react";
import { useResumeStore } from "@/providers/ResumeStoreProvider";

const TemplateEditor: React.FC = () => {
  const { data, updateField } = useResumeStore((state) => state);

  return (
    <div className="template-editor">
      <label>
        First Name:
        <input
          type="text"
          value={data.firstName}
          onChange={(e) => updateField("firstName", e.target.value)}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={data.lastName}
          onChange={(e) => updateField("lastName", e.target.value)}
        />
      </label>
      <label>
        Job Title:
        <input
          type="text"
          value={data.jobTitle}
          onChange={(e) => updateField("jobTitle", e.target.value)}
        />
      </label>
    </div>
  );
};

export default TemplateEditor;
