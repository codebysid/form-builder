import useCtxState from "@/app/hooks/useCtxState";
import QuestionDropDownOption from "../QuestionDropDownOption";
import useDispatch from "@/app/hooks/useDispatch";
import { ACTION_TYPES } from "@/app/context/reducer";
import { Handlers } from "@/app/context/FormStateProvider";

interface IDropDown {
  options: any[];
  label: string;
  onlyIcon?: boolean;
}

const DropDown = ({ options, label, onlyIcon = false }: IDropDown) => {
  const state = useCtxState();
  const dispatch = useDispatch();

  const handleCloseDropDown = () =>
    dispatch && dispatch({ type: ACTION_TYPES.UPDATE_DROPDOWN_VISIBILITY });

  return (
    <>
      {state?.isDropDownOpen && (
        <main
          className="h-screen w-screen fixed top-0 left-0 right-0 bottom-0 -z-20 cursor-pointer"
          onClick={handleCloseDropDown}
        ></main>
      )}

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
                state?.dropDownActions[
                  label.split(" ").join("_") as keyof Handlers
                ]
              }
            />
          );
        })}
      </div>
    </>
  );
};

export default DropDown;
