import useCtxState from "../hooks/useCtxState";
import FormCompleteness from "./FormCompleteness";

interface IRenderFormName {
  formName?: string;
  sampleAnswers: string[];
}

const calculatePercentage = (num: number, den: number) => {
  return (num / den) * 100;
};

const RenderFormName = ({ formName, sampleAnswers }: IRenderFormName) => {
  const state = useCtxState();
  const sampleAnswersLen = sampleAnswers.filter(Boolean);
  return (
    <div className="border border-gray-200 border-b-transparent flex flex-row justify-between items-center w-2/5 h-[56px] px-5">
      <h1 className="text-base font-semibold">{formName || "Untitled Form"}</h1>
      <FormCompleteness
        completePercentage={calculatePercentage(
          sampleAnswersLen.length,
          state?.formElements?.length || sampleAnswers.length
        )}
      />
    </div>
  );
};

export default RenderFormName;
