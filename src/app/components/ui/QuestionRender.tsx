import React, { ChangeEvent, memo } from "react";
import useDispatch from "@/app/hooks/useDispatch";
import Icons from "../Icons";
import Button from "./Button";
import { ACTION_TYPES } from "@/app/context/reducer";
import SelectedQuestionDropDown from "../SelectedQuestionDropDown";
import { useSortable } from "@dnd-kit/sortable";
import { useDraggable } from "@dnd-kit/core";
import useCtxState from "@/app/hooks/useCtxState";

export enum QuestionType {
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
  const state = useCtxState();
  const { transform } = useDraggable({ id: index });
  const { listeners, setNodeRef, attributes } = useSortable({
    id: index,
  });

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
  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;
  const handleQuestionAndDescChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!dispatch) return;
    e.stopPropagation();
    dispatch({
      type: ACTION_TYPES.ENTER_QUESTION_AND_DESCRIPTION,
      payload: { index, [e.target.name]: e.target.value },
    });
  };

  const handleOptionChange = (
    e: ChangeEvent<HTMLInputElement>,
    optionIndex: number
  ) => {
    if (!dispatch) return;
    dispatch({
      type: ACTION_TYPES.ENTER_OPTIONS,
      payload: { index, optionIndex, optionValue: e.target.value },
    });
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="border flex flex-col gap-1 rounded-2xl p-4 hover:bg-gray-50 touch-none"
    >
      <div className=" flex flex-col-reverse gap-1 lg:flex-row items-start lg:items-center justify-between">
        <div className=" flex flex-col gap-1 w-full">
          <input
            type="text"
            value={state?.formElements[index].question || ""}
            placeholder="Write a question"
            className="outline-none text-sm font-semibold text-black"
            onChange={handleQuestionAndDescChange}
            name="question"
          />
          <input
            type="text"
            placeholder="Write a help text or caption (leave empty if needed)."
            value={state?.formElements[index].description || ""}
            className="outline-none text-xs font-normal"
            name="description"
            onChange={handleQuestionAndDescChange}
          />
        </div>
        <SelectedQuestionDropDown
          selectedIconName={`${type}Icon`}
          index={index}
        />
      </div>
      {type === QuestionType.SingleSelect ? (
        <>
          {options.map((_, i) => (
            <div key={i} className="flex flex-row">
              <div className="flex flex-row gap-1 items-center w-full">
                <span className="h-4 w-4 rounded-full border-[2px] border-gray-500"></span>
                <input
                  placeholder={`Option ${i + 1}`}
                  className={`${getInputStyles(type)} text-sm outline-none`}
                  value={
                    state?.formElements[index].options &&
                    state?.formElements[index]?.options[i].trim()
                  }
                  onChange={(e) => handleOptionChange(e, i)}
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
