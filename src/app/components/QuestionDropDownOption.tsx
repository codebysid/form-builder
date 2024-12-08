import React from "react";
import Icons, { IconName } from "./Icons";
import useDispatch from "../hooks/useDispatch";
import { ACTION_TYPES } from "../context/reducer";

interface IQuestionCard {
  title: string;
  iconName?: string;
  handleVisibility: () => void;
}
const QuestionDropDownOption = ({
  title,
  iconName,
  handleVisibility,
}: IQuestionCard) => {
  const dispatch = useDispatch();

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
