import React from "react";
import Icons, { IconName } from "./Icons";
import useCtxState from "../hooks/useCtxState";

interface IQuestionCard {
  title: string;
  iconName?: string;
  handleVisibility?: (title: string, index: number) => void;
  onlyIcon: boolean;
}
const QuestionDropDownOption = ({
  title,
  iconName,
  handleVisibility,
  onlyIcon,
}: IQuestionCard) => {
  const state = useCtxState();
  return (
    <div
      onClick={() =>
        handleVisibility &&
        handleVisibility(
          title,
          state?.isQuestionDropDownOpen.activeQuestionIndex as number
        )
      }
      className=" flex flex-row items-center gap-2 cursor-pointer"
    >
      {<Icons name={iconName as IconName} />}
      {!onlyIcon && <p className=" text-sm font-medium">{title}</p>}
    </div>
  );
};

export default QuestionDropDownOption;
