import { ACTION_TYPES } from "../context/reducer";
import useCtxState from "../hooks/useCtxState";
import useDispatch from "../hooks/useDispatch";
import { questionTypes } from "../lib/constants";
import Icons, { IconName } from "./Icons";
import DropDown from "./ui/DropDown";

interface ISelectQuestionDropDown {
  selectedIconName: string;
  index: number;
}

const SelectedQuestionDropDown = ({
  selectedIconName,
  index,
}: ISelectQuestionDropDown) => {
  const state = useCtxState();
  const dispatch = useDispatch();
  const handleDropDownVisibility = () => {
    if (!dispatch) return;
    dispatch({
      type: ACTION_TYPES.UPDATE_QUESTION_DROPDOWN_VISIBILITY,
      payload: { index },
    });
  };
  return (
    <div className=" w-fit relative">
      <span
        onClick={handleDropDownVisibility}
        className=" flex flex-row gap-1 items-center "
      >
        <Icons name={selectedIconName as IconName} />
        <Icons name="downArrowIcon" />
      </span>
      {state?.isQuestionDropDownOpen.isOpen &&
        state.isQuestionDropDownOpen.activeQuestionIndex === index && (
          <div className=" absolute bg-white p-1 border rounded-xl">
            <DropDown
              options={questionTypes}
              label="selected question"
              onlyIcon
            />
          </div>
        )}
    </div>
  );
};

export default SelectedQuestionDropDown;
