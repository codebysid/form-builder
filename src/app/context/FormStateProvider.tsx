"use client";
import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { ACTION_TYPES, reducer } from "./reducer";

export interface IState {
  isDropDownOpen: boolean;
  formElements: {
    type: string;
    options?: string[];
    question: string;
    description?: string;
  }[];
  isQuestionDropDownOpen: { isOpen: boolean; activeQuestionIndex?: number };
  dropDownActions: {
    input_types: (title: string, index: number) => void;
    selected_question: (title: string, index: number) => void;
  };
  formName: string;
}

export interface IContextState {
  state: IState;
  dispatch: Dispatch<any>;
}

export const FormStateContext = createContext<IContextState | null>(null);

interface IFormStateProvider {
  children: ReactNode;
}

const FormStateProvider = ({ children }: IFormStateProvider) => {
  const [state, dispatch] = useReducer(reducer, {
    isDropDownOpen: false,
    formElements: [],
    isQuestionDropDownOpen: { isOpen: false },
    formName: "",
    dropDownActions: {
      input_types: function (title: string, index: number) {
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
            question: "",
            description: "",
          },
        };

        console.log({ questionPayload });

        dispatch(questionPayload);
        dispatch({
          type: ACTION_TYPES.UPDATE_DROPDOWN_VISIBILITY,
          payload: null,
        });
      },
      selected_question: function (title: string, index: number) {
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
            index,
            question: "",
            description: "",
          },
        };

        console.log({ questionPayload });

        dispatch(questionPayload);
        dispatch({
          type: ACTION_TYPES.UPDATE_QUESTION_DROPDOWN_VISIBILITY,
          payload: { index },
        });
      },
    },
  });

  return (
    <FormStateContext.Provider value={{ state, dispatch }}>
      {children}
    </FormStateContext.Provider>
  );
};

export default FormStateProvider;
