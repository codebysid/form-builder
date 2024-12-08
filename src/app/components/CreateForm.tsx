"use client";
import { useState } from "react";
import Button from "./ui/Button";
import Icons from "./Icons";
import QuestionTypesDropDown from "./QuestionTypesDropDown";

const CreateForm = () => {
  const [isQuestionTypeOpen, setIsQuestionTypeOpen] = useState<boolean>(false);

  const handleDropDownVisibility = () => setIsQuestionTypeOpen((prev) => !prev);

  return (
    <div className=" flex flex-col justify-center items-center w-[95vw]">
      <div className="border border-gray-200 border-b-transparent flex flex-row justify-between items-center w-2/5 h-[56px] px-5">
        <input
          placeholder="Untitled Form"
          type="text"
          className="w-full outline-none placeholder:text-base placeholder:font-semibold"
        />
        <Button icon={<Icons name="previewIcon" />} iconDirection="right">
          Preview
        </Button>
      </div>
      <div className="border border-gray-200 w-2/5 min-h-[93vh] flex justify-center relative">
        <Button
          variant="outline"
          icon={<Icons name="plusIcon" />}
          iconDirection="left"
          onClick={handleDropDownVisibility}
        >
          Add Question
        </Button>
        {isQuestionTypeOpen && <QuestionTypesDropDown setVi />}
      </div>
    </div>
  );
};

export default CreateForm;
