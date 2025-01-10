"use client";
import CustomCollapsible from "@/components/CustomCollapsible";
import CustomCountryInput from "@/components/CustomCountryInput";
import CustomFileUpload from "@/components/CustomFileUpload";
import CustomInput from "@/components/CustomInput";
import CustomShortCollapsible from "@/components/CustomShortCollapsible";
import TextEditor from "@/components/TextEditor";
import { useEffect, useState } from "react";
import React from "react";
import Collapsible from "react-collapsible";
import { Reorder, useDragControls } from "motion/react";
import DragSVG from "@/icons/draggabledots.svg";
import DeleteSVG from "@/icons/delete-1.svg";
import PlusSVG from "@/icons/plus.svg";
import Image from "next/image";
import CustomCourseCollapsible from "@/components/CustomCourseCollapsible";
import LayoutRenderer from "@/components/LayoutRenderer";
import { useRouter } from "next/navigation";
import { useResumeStore } from "@/providers/ResumeStoreProvider";

type Props = {
  params: {
    id: string;
  };
};

const BuilderPage = ({ params }: Props) => {
  // const [jobTitle, setJobTitle] = useState<string>("");
  // const [firstName, setFirstName] = useState<string>("");
  // const [lastName, setLastName] = useState<string>("");
  // const [email, setEmail] = useState<string>("");
  // const [phone, setPhone] = useState<string>("");
  // const [country, setCountry] = useState<string>("");
  // const [city, setCity] = useState<string>("");
  // const [address, setAddress] = useState<string>("");
  // const [postalCode, setPostalCode] = useState<string>("");
  // const [nationality, setNationality] = useState<string>("");
  // const [driversLicense, setDriversLicense] = useState<string>("");
  // const [placeOfBirth, setPlaceOfBirth] = useState<string>("");
  // const [dateOfBirth, setDateOfBirth] = useState<string>("");
  const controls = useDragControls();
  const { updateField,updateArrayField,data } = useResumeStore((state) => state);
  const [items, setItems] = useState([
    {
      id: 1,
      firstlabel: "School",
      secondlabel: "Degree",
      thirdlabel: "Start & End Date",
      fourthlabel: "City",
      lastlabel: "Description",
    },
  ]);

  const addCollapsible = () => {
    const newItem = {
      id: Date.now(), // Unique identifier
      firstlabel: "New School",
      secondlabel: "New Degree",
      thirdlabel: "New Start & End Date",
      fourthlabel: "New City",
      lastlabel: "New Description",
    };
    setItems((prev) => [...prev, newItem]);
  };

  const deleteItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const [templateData, setTemplateData] = useState<any>(null);
  const [error, setError] = useState<null | string>(null);
  
  const router = useRouter();

  const fetchTemplate = () => {
    fetch(`/${params.id}.json`)
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
      .then((data) => setTemplateData(data))
      .catch((error) => {
        console.log(error,"this is the error")
        if (error.message) {
          router.push("/templates");
        } else {
          setError("An error occurred while fetching the template");
        }
      });
  };
  useEffect(() => {
    // Fetch the local JSON file
    fetchTemplate();
  }, [params.id]);

  if (!templateData && !error) {
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
    <main className="w-[60%] flex relative">
      <section className="w-full px-32 py-20 gap-10 flex flex-col">
        <section className="flex flex-col gap-5">
          <div className="flex justify-between">
            <h2 className="text-[#605D71] font-bold text-2xl">
              Personal details
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-5">
              <CustomInput
                value={data.jobTitle}
                changeHandler={(text: string) => updateField("jobTitle",text)}
                name="Job Title"
                placeholder="Role you want"
              />
              <CustomFileUpload />
              <CustomInput
                value={data.firstName}
                changeHandler={(text: string) => updateField("firstName",text)}
                name="First Name"
                placeholder="John"
              />
              <CustomInput
                value={data.lastName}
                changeHandler={(text: string) =>updateField("lastName",text)}
                name="Last Name"
                placeholder="Doe"
              />
              <CustomInput
                value={data.email}
                changeHandler={(text: string) => updateField("email",text)}
                name="Email"
                placeholder="johndoe@gmail.com"
                type="email"
              />
              <CustomInput
                value={data.phone}
                changeHandler={(text: string) => updateField("phone",text)}
                name="Phone"
                placeholder=""
                type="tel"
              />
              <CustomCountryInput />

              <CustomInput
                value={data.city}
                changeHandler={(text: string) => updateField("city",text)}
                name="City"
                placeholder=""
              />
            </div>
            <Collapsible
              trigger={
                <div className="cursor-pointer text-[#3E9CF0] font-semibold flex gap-2 items-center">
                  <Image
                    src={PlusSVG}
                    className="w-5 h-5"
                    alt="Plus Icon SVG"
                  />
                  <p>Add more Details</p>
                </div>
              }
            >
              <div className="grid grid-cols-2 gap-5">
                <CustomInput
                  value={data.address}
                  changeHandler={(text: string) => updateField("address",text)}
                  name="Address"
                  placeholder=""
                />
                <CustomInput
                  value={data.postalCode}
                  changeHandler={(text: string) => updateField("postalCode",text)}
                  name="Postal Code"
                  placeholder=""
                />
                <CustomInput
                  value={data.driversLicense}
                  changeHandler={(text: string) => updateField("driversLicense",text)}
                  name="Driving License"
                  placeholder=""
                />
                <CustomInput
                  value={data.nationality}
                  changeHandler={(text: string) => updateField("nationality",text)}
                  name="Nationality"
                  placeholder=""
                />
                <CustomInput
                  value={data.placeOfBirth}
                  changeHandler={(text: string) => updateField("placeOfBirth",text)}
                  name="Place Of Birth"
                  placeholder=""
                />
                <CustomInput
                  value={data.dateOfBirth}
                  changeHandler={(text: string) => updateField("dateOfBirth",text)}
                  name="Date Of Birth"
                  placeholder=""
                />
              </div>
            </Collapsible>
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h2 className="text-[#605D71] font-bold text-2xl">
              Professional Summary
            </h2>
            <p className="text-[rgb(130,139,162)]">
              Write 2-4 short, energetic sentences about how great you are.
              Mention the role and what you did. What were the big achievements?
              Describe your motivation and list your skills.
            </p>
          </div>
          <TextEditor />
        </section>
        <section className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h2 className="text-[#605D71] font-bold text-2xl">Experience</h2>
            <p className="text-[rgb(130,139,162)]">
              Show your relevant experience (last 10 years). Use bullet points
              to note your achievements, if possible - use numbers/facts
              (Achieved X, measured by Y, by doing Z).
            </p>
          </div>
          <Reorder.Group
            axis="y"
            values={items}
            onReorder={setItems}
            className="flex flex-col gap-4"
          >
            {items.map((item) => (
              <Reorder.Item
                key={item.id}
                value={item}
                dragListener={false}
                dragControls={controls}
                className="relative border rounded-lg"
              >
                {/* Drag Handle */}
                <button
                  onPointerDown={(e) => controls.start(e)}
                  className="absolute group -left-11 cursor-grab w-8 py-5"
                >
                  <Image
                    className="w-6 h-6 hidden group-hover:block"
                    src={DragSVG}
                    alt="Draggable SVG Icon"
                  />
                </button>
                <div className=" items-center ">
                  {/* CustomCollapsible Component */}
                  <CustomCollapsible
                    firstlabel={item.firstlabel}
                    secondlabel={item.secondlabel}
                    thirdlabel={item.thirdlabel}
                    fourthlabel={item.fourthlabel}
                    lastlabel={item.lastlabel}
                  />
                </div>
                {/* Delete Button */}
                <button
                  onClick={() => deleteItem(item.id)}
                  className="absolute group -right-11 top-0 text-white py-5 w-8"
                >
                  <Image
                    className=" w-6 h-6 hidden group-hover:block"
                    src={DeleteSVG}
                    alt="Delete Draggable SVG Icon"
                  />
                </button>
              </Reorder.Item>
            ))}
          </Reorder.Group>
          <div
            onClick={addCollapsible}
            className="cursor-pointer text-[#3E9CF0] font-semibold flex gap-2 items-center"
          >
            <Image src={PlusSVG} className="w-5 h-5" alt="Plus Icon SVG" />
            <p>Add more Employment</p>
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h2 className="text-[#605D71] font-bold text-2xl">Education</h2>
            <p className="text-[rgb(130,139,162)]">
              A varied education on your resume sums up the value that your
              learnings and background will bring to job.
            </p>
          </div>
          <Reorder.Group
            axis="y"
            values={items}
            onReorder={setItems}
            className="flex flex-col gap-4"
          >
            {items.map((item) => (
              <Reorder.Item
                key={item.id}
                value={item}
                dragListener={false}
                dragControls={controls}
                className="relative border rounded-lg "
              >
                {/* Drag Handle */}
                <button
                  onPointerDown={(e) => controls.start(e)}
                  className="absolute group -left-11 cursor-grab w-8 py-5"
                >
                  <Image
                    className="w-6 h-6 hidden group-hover:block"
                    src={DragSVG}
                    alt="Draggable SVG Icon"
                  />
                </button>
                <div className=" items-center ">
                  {/* CustomCollapsible Component */}
                  <CustomCollapsible
                    firstlabel={item.firstlabel}
                    secondlabel={item.secondlabel}
                    thirdlabel={item.thirdlabel}
                    fourthlabel={item.fourthlabel}
                    lastlabel={item.lastlabel}
                  />
                </div>
                {/* Delete Button */}
                <button
                  onClick={() => deleteItem(item.id)}
                  className="absolute group -right-11 top-0 text-white py-5 w-8"
                >
                  <Image
                    className=" w-6 h-6 hidden group-hover:block"
                    src={DeleteSVG}
                    alt="Delete Draggable SVG Icon"
                  />
                </button>
              </Reorder.Item>
            ))}
          </Reorder.Group>
          <div
            onClick={addCollapsible}
            className="cursor-pointer text-[#3E9CF0] font-semibold flex gap-2 items-center"
          >
            <Image src={PlusSVG} className="w-5 h-5" alt="Plus Icon SVG" />
            <p>Add more Education</p>
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h2 className="text-[#605D71] font-bold text-2xl">Links</h2>
            <p className="text-[rgb(130,139,162)]">
              You can add links to websites you want hiring managers to see!
              Perhaps It will be a link to your portfolio, LinkedIn profile, or
              personal website
            </p>
          </div>
          <Reorder.Group
            axis="y"
            values={items}
            onReorder={setItems}
            className="flex flex-col gap-4"
          >
            {items.map((item) => (
              <Reorder.Item
                key={item.id}
                value={item}
                dragListener={false}
                dragControls={controls}
                className="relative border rounded-lg "
              >
                {/* Drag Handle */}
                <button
                  onPointerDown={(e) => controls.start(e)}
                  className="absolute group -left-11 cursor-grab w-8 py-5"
                >
                  <Image
                    className="w-6 h-6 hidden group-hover:block"
                    src={DragSVG}
                    alt="Draggable SVG Icon"
                  />
                </button>
                <div className=" items-center ">
                  {/* CustomCollapsible Component */}
                  <CustomShortCollapsible
                    firstlabel={item.firstlabel}
                    secondlabel={item.secondlabel}
                    isWritten={true}
                  />
                </div>
                {/* Delete Button */}
                <button
                  onClick={() => deleteItem(item.id)}
                  className="absolute group -right-11 top-0 text-white py-5 w-8"
                >
                  <Image
                    className=" w-6 h-6 hidden group-hover:block"
                    src={DeleteSVG}
                    alt="Delete Draggable SVG Icon"
                  />
                </button>
              </Reorder.Item>
            ))}
          </Reorder.Group>
          <div
            onClick={addCollapsible}
            className="cursor-pointer text-[#3E9CF0] font-semibold flex gap-2 items-center"
          >
            <Image src={PlusSVG} className="w-5 h-5" alt="Plus Icon SVG" />
            <p>Add more Links</p>
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h2 className="text-[#605D71] font-bold text-2xl">Skills</h2>
            <p className="text-[rgb(130,139,162)]">
              Choose 5 important skills that show you fit the position. Make
              sure they match the key skills mentioned in the job listing
              (especially when applying via an online system).
            </p>
          </div>
          <Reorder.Group
            axis="y"
            values={items}
            onReorder={setItems}
            className="flex flex-col gap-4"
          >
            {items.map((item) => (
              <Reorder.Item
                key={item.id}
                value={item}
                dragListener={false}
                dragControls={controls}
                className="relative border rounded-lg "
              >
                {/* Drag Handle */}
                <button
                  onPointerDown={(e) => controls.start(e)}
                  className="absolute group -left-11 cursor-grab w-8 py-5"
                >
                  <Image
                    className="w-6 h-6 hidden group-hover:block"
                    src={DragSVG}
                    alt="Draggable SVG Icon"
                  />
                </button>
                <div className=" items-center ">
                  {/* CustomCollapsible Component */}
                  <CustomShortCollapsible
                    firstlabel={item.firstlabel}
                    secondlabel={item.secondlabel}
                    isWritten={false}
                  />
                </div>
                {/* Delete Button */}
                <button
                  onClick={() => deleteItem(item.id)}
                  className="absolute group -right-11 top-0 text-white py-5 w-8"
                >
                  <Image
                    className=" w-6 h-6 hidden group-hover:block"
                    src={DeleteSVG}
                    alt="Delete Draggable SVG Icon"
                  />
                </button>
              </Reorder.Item>
            ))}
          </Reorder.Group>
          <div
            onClick={addCollapsible}
            className="cursor-pointer text-[#3E9CF0] font-semibold flex gap-2 items-center"
          >
            <Image src={PlusSVG} className="w-5 h-5" alt="Plus Icon SVG" />
            <p>Add more Links</p>
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h2 className="text-[#605D71] font-bold text-2xl">Languages</h2>
            <p className="text-[rgb(130,139,162)]">
              Choose 5 important skills that show you fit the position. Make
              sure they match the key skills mentioned in the job listing
              (especially when applying via an online system).
            </p>
          </div>
          <Reorder.Group
            axis="y"
            values={items}
            onReorder={setItems}
            className="flex flex-col gap-4"
          >
            {items.map((item) => (
              <Reorder.Item
                key={item.id}
                value={item}
                dragListener={false}
                dragControls={controls}
                className="relative border rounded-lg "
              >
                {/* Drag Handle */}
                <button
                  onPointerDown={(e) => controls.start(e)}
                  className="absolute group -left-11 cursor-grab w-8 py-5"
                >
                  <Image
                    className="w-6 h-6 hidden group-hover:block"
                    src={DragSVG}
                    alt="Draggable SVG Icon"
                  />
                </button>
                <div className=" items-center ">
                  {/* CustomCollapsible Component */}
                  <CustomShortCollapsible
                    firstlabel={item.firstlabel}
                    secondlabel={item.secondlabel}
                    isWritten={false}
                  />
                </div>
                {/* Delete Button */}
                <button
                  onClick={() => deleteItem(item.id)}
                  className="absolute group -right-11 top-0 text-white py-5 w-8"
                >
                  <Image
                    className=" w-6 h-6 hidden group-hover:block"
                    src={DeleteSVG}
                    alt="Delete Draggable SVG Icon"
                  />
                </button>
              </Reorder.Item>
            ))}
          </Reorder.Group>
          <div
            onClick={addCollapsible}
            className="cursor-pointer text-[#3E9CF0] font-semibold flex gap-2 items-center"
          >
            <Image src={PlusSVG} className="w-5 h-5" alt="Plus Icon SVG" />
            <p>Add more Languages</p>
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h2 className="text-[#605D71] font-bold text-2xl">Courses</h2>
            <p className="text-[rgb(130,139,162)]">
              Choose 5 important skills that show you fit the position. Make
              sure they match the key skills mentioned in the job listing
              (especially when applying via an online system).
            </p>
          </div>
          <Reorder.Group
            axis="y"
            values={items}
            onReorder={setItems}
            className="flex flex-col gap-4"
          >
            {items.map((item) => (
              <Reorder.Item
                key={item.id}
                value={item}
                dragListener={false}
                dragControls={controls}
                className="relative border rounded-lg "
              >
                {/* Drag Handle */}
                <button
                  onPointerDown={(e) => controls.start(e)}
                  className="absolute group -left-11 cursor-grab w-8 py-5"
                >
                  <Image
                    className="w-6 h-6 hidden group-hover:block"
                    src={DragSVG}
                    alt="Draggable SVG Icon"
                  />
                </button>
                <div className=" items-center ">
                  {/* CustomCollapsible Component */}
                  <CustomCourseCollapsible
                    firstlabel={item.firstlabel}
                    secondlabel={item.secondlabel}
                    thirdlabel={item.thirdlabel}
                  />
                </div>
                {/* Delete Button */}
                <button
                  onClick={() => deleteItem(item.id)}
                  className="absolute group -right-11 top-0 text-white py-5 w-8"
                >
                  <Image
                    className=" w-6 h-6 hidden group-hover:block"
                    src={DeleteSVG}
                    alt="Delete Draggable SVG Icon"
                  />
                </button>
              </Reorder.Item>
            ))}
          </Reorder.Group>
          <div
            onClick={addCollapsible}
            className="cursor-pointer text-[#3E9CF0] font-semibold flex gap-2 items-center"
          >
            <Image src={PlusSVG} className="w-5 h-5" alt="Plus Icon SVG" />
            <p>Add more Courses</p>
          </div>
        </section>
        <section className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h2 className="text-[#605D71] font-bold text-2xl">Hobbies</h2>
            <p className="text-[rgb(130,139,162)]">What do you like?</p>
          </div>
          <Reorder.Group
            axis="y"
            values={items}
            onReorder={setItems}
            className="flex flex-col gap-4"
          >
            {items.map((item) => (
              <Reorder.Item
                key={item.id}
                value={item}
                dragListener={false}
                dragControls={controls}
                className="relative border rounded-lg "
              >
                {/* Drag Handle */}
                <button
                  onPointerDown={(e) => controls.start(e)}
                  className="absolute group -left-11 cursor-grab w-8 py-5"
                >
                  <Image
                    className="w-6 h-6 hidden group-hover:block"
                    src={DragSVG}
                    alt="Draggable SVG Icon"
                  />
                </button>
                <div className="flex flex-col gap-[6px]">
                  <input className=" focus:border-b-blue-800 border-[#EFF2F9] border-2 py-3 px-2 outline-none rounded-md bg-[#EFF2F9]" />
                </div>
                {/* Delete Button */}
                <button
                  onClick={() => deleteItem(item.id)}
                  className="absolute group -right-11 top-0 text-white py-5 w-8"
                >
                  <Image
                    className=" w-6 h-6 hidden group-hover:block"
                    src={DeleteSVG}
                    alt="Delete Draggable SVG Icon"
                  />
                </button>
              </Reorder.Item>
            ))}
          </Reorder.Group>
          <div
            onClick={addCollapsible}
            className="cursor-pointer text-[#3E9CF0] font-semibold flex gap-2 items-center"
          >
            <Image src={PlusSVG} className="w-5 h-5" alt="Plus Icon SVG" />
            <p>Add more Hobbies</p>
          </div>
        </section>
      </section>
      <section className="w-[40%] h-screen fixed right-0 top-0 bg-red-400">
        <LayoutRenderer layout={templateData.layout} />
      </section>
    </main>
  );
};

export default BuilderPage;