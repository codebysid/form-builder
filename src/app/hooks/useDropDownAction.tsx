import { ACTION_TYPES } from "../context/reducer";
import useDispatch from "./useDispatch";

interface IUseDropDownAction {
  id: string;
}

const useDropDownAction = ({ id }: IUseDropDownAction) => {
  const dispatch = useDispatch();
  const dropDownActions = {
    input_types: function (title: string) {
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
    },
    selected_question: null,
  };
  console.log(id, dropDownActions[id]);
  return dropDownActions[id];
};

export default useDropDownAction;
