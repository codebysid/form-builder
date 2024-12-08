"use client";
import React from "react";
import Button from "./ui/Button";
import Icons from "./Icons";
import useCtxState from "../hooks/useCtxState";
import useDispatch from "../hooks/useDispatch";
import { ACTION_TYPES } from "../context/reducer";
import QuestionTypesDropDown from "./QuestionTypesDropDown";
import QuestionRender from "./ui/QuestionRender";

const FormBody = () => {
  const state = useCtxState();
  const dispatch = useDispatch();

  const handleDropDownVisibility = () => {
    dispatch && dispatch({ type: ACTION_TYPES.UPDATE_DROPDOWN_VISIBILITY });
  };

  return (
    <div className="border border-gray-200 w-2/5 min-h-[93vh] flex justify-center ">
      <div className=" flex flex-col items-center justify-start w-full">
        <div className=" w-full p-4 flex flex-col gap-4">
          {state?.formElements.map((ques, i) => {
            return (
              <QuestionRender
                key={i}
                type={ques.type}
                options={ques.options}
                index={i}
              />
            );
          })}
        </div>
        <div className="relative flex flex-col items-center justify-start w-full">
          <Button
            variant="outline"
            icon={<Icons name="plusIcon" />}
            iconDirection="left"
            onClick={handleDropDownVisibility}
          >
            Add Question
          </Button>
          {state?.isDropDownOpen && <QuestionTypesDropDown />}
        </div>
      </div>
    </div>
  );
};

export default FormBody;
