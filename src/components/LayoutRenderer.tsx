import React from "react";
import Handlebars from "handlebars";
import { useResumeStore } from "@/providers/ResumeStoreProvider";

Handlebars.registerHelper("default", function (value, defaultValue) {
  return value || defaultValue;
});

type Props = {
  layout: string;
};

const LayoutRenderer: React.FC<Props> = ({ layout }) => {
  const data = useResumeStore((state) => state.data);

  // Compile the layout string with Handlebars
  const template = Handlebars.compile(layout);

  // Render the layout with the current state data
  const renderedLayout = template(data);
  console.log(data,"new render")

  return (
    <div
      dangerouslySetInnerHTML={{ __html: renderedLayout }}
    />
  );
};

export default LayoutRenderer;
