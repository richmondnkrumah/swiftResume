import React from "react";

// Utility to replace placeholders with actual data
const processTemplate = (template: string, data: Record<string, any>) => {
  return template.replace(/\{(\w+)\}/g, (_, key) => {
    const value = data[key];
    console.log(key,"this is key")
    if (Array.isArray(value)) {
      // Convert arrays to HTML lists
      return value.map(item => `<li>${item}</li>`).join("");
    }
    return value || ""; // Replace with data or leave empty if missing
  });
};

// Convert processed string to JSX-compatible markup
const createMarkup = (html: string) => ({ __html: html });

type TemplateRendererProps = {
  template: string;
  data: Record<string, any>;
};

const TemplateRenderer: React.FC<TemplateRendererProps> = ({ template, data }) => {
  const processedHtml = processTemplate(template, data);
  return <div dangerouslySetInnerHTML={createMarkup(processedHtml)} />;
};

export default TemplateRenderer;
