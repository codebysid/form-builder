"use client";

import { useEffect, useState } from "react";
import useCtxState from "../hooks/useCtxState";
import RednderFormElement from "./RednderFormElement";
import RenderFormName from "./RenderFormName";
import Button from "./ui/Button";

const RenderForm = () => {
  const state = useCtxState();
  const [sampleAnswers, setSampleAnswers] = useState<string[]>([""]);

  useEffect(() => {
    console.log({ sampleAnswers });
  }, [sampleAnswers]);

  return (
    <div className="flex flex-col justify-center items-center w-[95vw]">
      <RenderFormName
        formName={state?.formName}
        sampleAnswers={sampleAnswers}
      />
      <div className="border border-gray-200 w-2/5 h-[92vh] overflow-y-auto flex flex-col justify-start items-center">
        {state?.formElements.map((ele, i) => {
          return (
            <RednderFormElement
              key={i}
              question={ele.question}
              description={ele.description}
              type={ele.type}
              options={ele.options}
              setState={setSampleAnswers}
              state={sampleAnswers}
              index={i}
            />
          );
        })}
        <div className="w-full flex justify-end items-center pr-4">
          <Button variant="primary" className="bg-green-500">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RenderForm;
