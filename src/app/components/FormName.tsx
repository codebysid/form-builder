"use client";
import React, { ChangeEvent } from "react";
import Button from "./ui/Button";
import Icons from "./Icons";
import useCtxState from "../hooks/useCtxState";
import useDispatch from "../hooks/useDispatch";
import { ACTION_TYPES } from "../context/reducer";

const FormName = () => {
  const state = useCtxState();
  const dispatch = useDispatch();

  const handleFormName = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch &&
    dispatch({
      type: ACTION_TYPES.FORM_NAME,
      payload: { formName: e.target.value },
    });

  return (
    <div className="border border-gray-200 border-b-transparent flex flex-row justify-between items-center w-2/5 h-[56px] px-5">
      <input
        placeholder="Untitled Form"
        type="text"
        value={state?.formName}
        onChange={handleFormName}
        className="w-full outline-none placeholder:text-base placeholder:font-semibold"
      />
      <Button
        disabled={state && state?.formElements?.length > 0 ? false : true}
        icon={<Icons name="previewIcon" />}
        iconDirection="right"
        variant="outline"
      >
        Preview
      </Button>
    </div>
  );
};

export default FormName;