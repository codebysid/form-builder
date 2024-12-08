import React, { RefObject } from "react";
import { questionTypes } from "../lib/constants";
import DropDown from "./ui/DropDown";
import useCtxState from "../hooks/useCtxState";

const QuestionTypesDropDown = () => {
  const state = useCtxState();
  return (
    <div
      className={`absolute ${
        state && state?.formElements.length >= 3 ? `bottom-8` : `top-[100%]`
      }  left-[40%] border h-max p-3 w-1/2 rounded-2xl bg-white z-40`}
    >
      <DropDown options={questionTypes} label="input types" />
    </div>
  );
};

export default QuestionTypesDropDown;
