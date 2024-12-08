import React from "react";
import Icons, { IconName } from "./Icons";
import useDispatch from "../hooks/useDispatch";
import { ACTION_TYPES } from "../context/reducer";
import useCtxState from "../hooks/useCtxState";

interface IQuestionCard {
  title: string;
  iconName?: string;
}
const QuestionDropDownOption = ({ title, iconName }: IQuestionCard) => {
  const dispatch = useDispatch();
  const state = useCtxState();

  const handleVisibility = () => {
    if (!dispatch) return;
    const questionType = title.includes(" ")
      ? title.split(" ").join("")
      : title.toLowerCase();

    const options = questionType.includes("Select") ? [" ", " "] : null;

    const questionPayload = {
      type: ACTION_TYPES.ADD_FORM_ELEMENTS,
      payload: {
        type: questionType.charAt(0).toLowerCase() + questionType.slice(1),
        ...(options && { options }),
      },
    };

    console.log({ questionPayload });

    dispatch(questionPayload);
    dispatch({ type: ACTION_TYPES.UPDATE_DROPDOWN_VISIBILITY });
  };

  return (
    <div
      onClick={handleVisibility}
      className=" flex flex-row items-center gap-2"
    >
      {<Icons name={iconName as IconName} />}
      <p className=" text-sm font-medium">{title}</p>
    </div>
  );
};

export default QuestionDropDownOption;
