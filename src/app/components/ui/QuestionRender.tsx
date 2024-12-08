import React, { memo } from "react";
import useDispatch from "@/app/hooks/useDispatch";
import Icons from "../Icons";
import Button from "./Button";
import CustomDatePicker from "./DatePicker";
import { ACTION_TYPES } from "@/app/context/reducer";

enum QuestionType {
  ShortAnswer = "shortAnswer",
  Number = "number",
  Url = "url",
  LongAnswer = "longAnswer",
  SingleSelect = "singleSelect",
  Date = "date",
}

interface IQuestionRender {
  type: QuestionType;
  options?: string[];
  index: number;
}

const QuestionRender: React.FC<IQuestionRender> = ({
  type,
  options = [],
  index,
}) => {
  const dispatch = useDispatch();
  if (!type) return;
  const handleAddOptions = () => {
    if (!dispatch) return;
    dispatch({ type: ACTION_TYPES.ADD_OPTIONS, payload: { index } });
  };

  const getInputStyles = (type: QuestionType): string => {
    switch (type) {
      case QuestionType.ShortAnswer:
      case QuestionType.Number:
      case QuestionType.Url:
        return "h-8 w-full rounded-lg border bg-xDisable";
      case QuestionType.LongAnswer:
        return "h-20 w-full rounded-lg border bg-xDisable";
      case QuestionType.SingleSelect:
        return "w-full rounded-lg border bg-white text-sm p-1 pl-2";
      case QuestionType.Date:
        return "h-8 text-sm w-full rounded-lg border outline-none p-1 pl-2 bg-xDisable";
      default:
        return "";
    }
  };

  return (
    <div className="border flex flex-col gap-1 rounded-2xl p-4 hover:bg-gray-50">
      <input
        type="text"
        placeholder="Write a question"
        className="text-sm font-semibold text-black"
      />
      <input
        type="text"
        placeholder="Write a help text or caption (leave empty if needed)."
        className="text-xs font-normal"
      />

      {type === QuestionType.SingleSelect ? (
        <>
          {options.map((_, i) => (
            <div key={i} className="flex flex-row">
              <div className="flex flex-row gap-1 items-center w-full">
                <span className="h-4 w-4 rounded-full border-[2px] border-gray-500"></span>
                <input
                  placeholder={`Option ${i + 1}`}
                  className={`${getInputStyles(type)} text-sm`}
                />
              </div>
              {i === options.length - 1 && (
                <Button
                  onClick={handleAddOptions}
                  variant="ghost"
                  icon={<Icons name="plusIcon" />}
                  className="w-fit"
                />
              )}
            </div>
          ))}
        </>
      ) : type === QuestionType.Date ? (
        <div className={`${getInputStyles(type)}`}>
          <span>MM-DD-YY</span>
        </div>
      ) : (
        <div className={getInputStyles(type)}></div>
      )}
    </div>
  );
};

export default memo(QuestionRender);
