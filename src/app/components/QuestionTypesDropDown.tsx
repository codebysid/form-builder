import React from "react";
import { questionTypes } from "../lib/constants";
import DropDown from "./ui/DropDown";

const QuestionTypesDropDown = () => {
  return (
    <div className="absolute top-[100%] left-[40%] border h-max p-3 w-1/2 rounded-2xl bg-white">
      <DropDown options={questionTypes} label="Input Types" />
    </div>
  );
};

export default QuestionTypesDropDown;
