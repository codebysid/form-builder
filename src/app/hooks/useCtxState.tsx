"use client";
import { useContext } from "react";
import { FormStateContext } from "../context/FormStateProvider";
import { auth } from "../utils/auth";

const useCtxState = () => {
  const context = useContext(FormStateContext);
  if (context?.state) return context.state;
  return null;
};

export default useCtxState;
