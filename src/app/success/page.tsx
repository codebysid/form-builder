import React from "react";
import Button from "../components/ui/Button";
import GenerateMoreFormsBtn from "../components/GenerateMoreFormsBtn";

const page = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center w-[95vw] min-h-screen border">
      <h1 className=" text-xl font-bold">Your response has been submited 🥳</h1>
      <GenerateMoreFormsBtn />
    </div>
  );
};

export default page;
