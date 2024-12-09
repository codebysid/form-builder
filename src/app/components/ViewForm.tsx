"use client";
import { useState } from "react";
import RenderFormName from "./RenderFormName";
import RednderFormElement from "./RednderFormElement";
import Button from "./ui/Button";
import { useRouter } from "next/navigation";

interface IViewForm {
  formData: any;
}

const ViewForm = ({ formData }: IViewForm) => {
  const [sampleAnswers, setSampleAnswers] = useState<string[]>([""]);
  const router = useRouter();
  const handleSubmission = () => router.push("/success");
  return (
    <>
      <RenderFormName
        formName={formData?.formName}
        sampleAnswers={sampleAnswers}
      />
      <div className="border border-gray-200 w-10/12 lg:w-2/5 h-[92vh] overflow-y-auto flex flex-col justify-start items-center">
        {formData.map((ele, i) => {
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
          <Button variant="primary" onClick={handleSubmission}>
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default ViewForm;
