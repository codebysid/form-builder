"use client";
import Button from "./ui/Button";
import Icons from "./Icons";
import QuestionTypesDropDown from "./QuestionTypesDropDown";
import useCtxState from "../hooks/useCtxState";
import useDispatch from "../hooks/useDispatch";
import { ACTION_TYPES } from "../context/reducer";
import { useEffect } from "react";

const CreateForm = () => {
  const state = useCtxState()
  const dispatch = useDispatch()
  const handleDropDownVisibility = () => {
    console.log("dropdown trigger", ACTION_TYPES.UPDATE_DROPDOWN_VISIBILITY)
    dispatch && dispatch({ type: ACTION_TYPES.UPDATE_DROPDOWN_VISIBILITY });
  }
  useEffect(() => {
    console.log({ state })
  }, [state])

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
        {state?.isDropDownOpen && <QuestionTypesDropDown />}
      </div>
    </div>
  );
};

export default CreateForm;
