"use client";
import React, { useEffect, useState } from "react";
import TemplateRenderer from "@/components/TemplateRenderer";
import LayoutRenderer from "@/components/LayoutRenderer";
import TemplateEditor from "@/components/TemplateEditor";
import { useRouter } from "next/navigation";
const Page: React.FC = () => {
  const [resumeData, setResumeData] = useState<any>(null);
  const [error, setError] = useState<null | string>(null);
  const router = useRouter()

  const fetchTemplate = () => {
    fetch("/resume.json")
      .then((res) => {
        if (!res.ok) {
          // Handle different error types based on status
          if (res.status === 404) {
            throw new Error("not-found");
          } else {
            throw new Error("fetch-error");
          }
        }
        return res.json();
      })
      .then((data) => setResumeData(data))
      .catch((error) => {
        if (error.message) {
          router.push('/templates')
          console.log(error.message)
        }
        else {
          setError("An error occurred while fetching the template")
        }
      });
  }
  useEffect(() => {
    // Fetch the local JSON file
    fetchTemplate()
  }, []);

  if (!resumeData && !error) {
    return <div>Loading...</div>; // Loading spinner or text
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>{error}</h2>
        <button
          onClick={fetchTemplate}
          className="retry-button bg-blue-500 text-white p-2 rounded"
        >
          Try Again
        </button>
      </div>
    );
  }
  return (
    <div className="resume-container p-5">
      <TemplateEditor />
      <LayoutRenderer layout={resumeData.layout} />
    </div>
  );
};

export default Page;
