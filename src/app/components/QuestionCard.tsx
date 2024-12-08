import React, { Dispatch, SetStateAction } from "react";
import Icons, { IconName } from "./Icons";

interface IQuestionCard {
  title: string;
  iconName: string;
}
const QuestionCard = ({ title, iconName }: IQuestionCard) => {


  return (
    <div className=" flex flex-row items-center gap-2">
      {<Icons name={iconName as IconName} />}
      <p className=" text-sm font-medium">{title}</p>
    </div>
  );
};

export default QuestionCard;
