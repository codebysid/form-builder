"use client";
import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { reducer } from "./reducer";

export interface IState {
  isDropDownOpen: boolean;
  formElements: { type: string; options?: string[] }[];
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
    formElements: [{ type: null }],
  });

  return (
    <FormStateContext.Provider value={{ state, dispatch }}>
      {children}
    </FormStateContext.Provider>
  );
};

export default FormStateProvider;
