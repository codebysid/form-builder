import { IState } from "./FormStateProvider";

export const ACTION_TYPES = {
  UPDATE_DROPDOWN_VISIBILITY: "updateDropDownVisibility",
  ADD_FORM_ELEMENTS: "addFormElements",
  ADD_OPTIONS: "addOptions",
};

export function reducer(state: IState, action: { type: string; payload: any }) {
  // console.log("reducer", state, action)
  switch (action.type) {
    case ACTION_TYPES.UPDATE_DROPDOWN_VISIBILITY: {
      return { ...state, isDropDownOpen: !state.isDropDownOpen };
    }
    case ACTION_TYPES.ADD_FORM_ELEMENTS: {
      return {
        ...state,
        formElements: [...state.formElements, action.payload],
      };
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
    default:
      return state;
  }
}
