import useCtxState from "@/app/hooks/useCtxState";
import QuestionDropDownOption from "../QuestionDropDownOption";

interface IDropDown {
  options: any[];
  label: string;
  onlyIcon?: boolean;
}

const DropDown = ({ options, label, onlyIcon = false }: IDropDown) => {
  const state = useCtxState();

  return (
    <>
      {!onlyIcon && (
        <p className=" text-xs font-semibold text-xGray py-2">
          {label.toUpperCase()}
        </p>
      )}
      <div className=" flex flex-col gap-4">
        {options.map((ques) => {
          return (
            <QuestionDropDownOption
              key={ques.id}
              title={ques.title}
              onlyIcon={onlyIcon}
              iconName={ques.iconName}
              handleVisibility={
                state?.dropDownActions[label.split(" ").join("_")]
              }
            />
          );
        })}
      </div>
    </>
  );
};

export default DropDown;
