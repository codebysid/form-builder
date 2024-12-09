import { IState } from "./FormStateProvider";

export const ACTION_TYPES = {
  UPDATE_DROPDOWN_VISIBILITY: "updateDropDownVisibility",
  ADD_FORM_ELEMENTS: "addFormElements",
  ADD_OPTIONS: "addOptions",
  UPDATE_QUESTION_DROPDOWN_VISIBILITY: "updateQuestionDropDownVisibility",
  DRAG_AND_DROP: "dragAndDrop",
  FORM_NAME: "formName",
  ENTER_QUESTION_AND_DESCRIPTION: "enterQuestionAndDescription",
  ENTER_OPTIONS: "enterOptions",
  RESET_FORM_ELEMENTS: "resetFormElements",
};

export function reducer(state: IState, action: { type: string; payload: any }) {
  switch (action.type) {
    case ACTION_TYPES.UPDATE_DROPDOWN_VISIBILITY: {
      return { ...state, isDropDownOpen: !state.isDropDownOpen };
    }
    case ACTION_TYPES.ADD_FORM_ELEMENTS: {
      const index = action.payload.index;
      if (index === undefined || index === null)
        return {
          ...state,
          formElements: [...state.formElements, action.payload],
        };

      const newFormElements = state.formElements.map((ele, i) => {
        console.log("checking index in adding form elements", { index, i });
        if (i === index) {
          return action.payload;
        }
        return ele;
      });
      return { ...state, formElements: newFormElements };
    }
    case ACTION_TYPES.ADD_OPTIONS: {
      const newFormElements = state.formElements.map((ele, i) => {
        if (i === action.payload.index) {
          return {
            ...ele,
            options: ele.options ? [...ele.options, " "] : [" "],
          };
        }
        return ele;
      });

      console.log({ newFormElements });
      return { ...state, formElements: newFormElements };
    }
    case ACTION_TYPES.UPDATE_QUESTION_DROPDOWN_VISIBILITY: {
      return {
        ...state,
        isQuestionDropDownOpen: {
          isOpen: !state.isQuestionDropDownOpen.isOpen,
          activeQuestionIndex: action.payload.index,
        },
      };
    }
    case ACTION_TYPES.DRAG_AND_DROP: {
      const { oldIndex, newIndex } = action.payload;
      const updatedElements = [...state.formElements];
      const [movedItem] = updatedElements.splice(oldIndex, 1);
      updatedElements.splice(newIndex, 0, movedItem);
      return { ...state, formElements: updatedElements };
    }
    case ACTION_TYPES.FORM_NAME: {
      return { ...state, formName: action.payload.formName };
    }
    case ACTION_TYPES.ENTER_QUESTION_AND_DESCRIPTION: {
      const newFormElements = state.formElements.map((ele, i) => {
        if (i === action.payload.index) {
          return {
            ...ele,
            ...(action.payload.question && {
              question: action.payload.question,
            }),
            ...(action.payload.description && {
              description: action.payload.description,
            }),
          };
        }
        return ele;
      });
      console.log({ newFormElements });
      return { ...state, formElements: newFormElements };
    }
    case ACTION_TYPES.ENTER_OPTIONS: {
      const newFormElements = state.formElements.map((ele, i) => {
        if (i === action.payload.index) {
          const newOptions = [...(ele.options || [])];
          newOptions[action.payload.optionIndex] = action.payload.optionValue;
          return {
            ...ele,
            options: newOptions,
          };
        }
        return ele;
      });
      console.log({ newFormElements });
      return { ...state, formElements: newFormElements };
    }
    case ACTION_TYPES.RESET_FORM_ELEMENTS: {
      return { ...state, formElements: [] };
    }
    default:
      return state;
  }
}
