import { ChangeEvent, Dispatch, SetStateAction } from "react";
import RenderInput from "./RenderInput";
import Button from "./ui/Button";
import CustomDatePicker from "./ui/DatePicker";

interface IRenderFormElement {
  question?: string;
  description?: string;
  options?: string[];
  type: string;
  setState: Dispatch<SetStateAction<string[]>>;
  state: string[];
  index: number;
}
const RednderFormElement = ({
  question,
  description,
  options,
  type,
  setState,
  state,
  index,
}: IRenderFormElement) => {
  const handleAnswers = (e: ChangeEvent<any>) => {
    const answers = [...state];
    answers[index] = e.target.value;
    setState(answers);
  };
  return (
    <div className=" w-full p-4 flex flex-col gap-1">
      <p className="text-sm font-semibold text-black capitalize">{question}</p>
      <p className="text-xs font-normal">{description}</p>

      {type === "date" && (
        <CustomDatePicker setAnswers={setState} index={index} />
      )}
      {(type.includes("shortAnswer") || type.includes("url")) && (
        <input
          type="text"
          value={state[index]}
          onChange={(e) => handleAnswers(e)}
          className=" outline-none border rounded-lg text-sm bg-white w-full h-8 text-gray-600 p-1"
        />
      )}
      {type.includes("longAnswer") && (
        <textarea
          value={state[index]}
          onChange={(e) => handleAnswers(e)}
          className="h-20 border w-full rounded-lg resize-none outline-none text-sm text-gray-600 p-1"
        />
      )}

      {type.includes("singleSelect") && (
        <div className="space-y-2">
          {options?.map((option, i) => (
            <label
              key={i}
              className="flex flex-row items-center space-x-2 cursor-pointer"
            >
              <input
                type="radio"
                name={`question`}
                className="hidden peer"
                onChange={(e) => handleAnswers(e)}
              />
              <span
                className="relative w-4 h-4 rounded-full border-[2px] peer-checked:border-green-500 
              peer-checked:after:absolute
              peer-checked:after:top-[50%]
              peer-checked:after:left-[50%]
              peer-checked:after:-translate-x-[50%]
              peer-checked:after:-translate-y-[50%]
              peer-checked:after:w-[6px] peer-checked:after:h-[6px] peer-checked:after:rounded-full peer-checked:after:bg-green-500"
              ></span>
              <span className=" text-sm font-medium">
                {option || `Option ${i + 1}`}
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default RednderFormElement;
