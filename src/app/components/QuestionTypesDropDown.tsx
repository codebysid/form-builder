import React from "react";
import { questionTypes } from "../lib/constants";
import QuestionCard from "./QuestionCard";

const QuestionTypesDropDown = () => {
  return (
    <div className="absolute top-8 left-[40%] border h-max p-3 w-1/3 rounded-2xl">
      <p className=" text-xs font-semibold text-xGray py-2">INPUT TYPES</p>
      <div className=" flex flex-col gap-4">
        {questionTypes.map((ques) => {
          return (
            <QuestionCard
              key={ques.id}
              title={ques.title}
              iconName={ques.iconName}
            />
          );
        })}
      </div>
    </div>
  );
};

export default QuestionTypesDropDown;
