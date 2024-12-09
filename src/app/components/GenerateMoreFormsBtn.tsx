"use client";
import { useRouter } from "next/navigation";
import Button from "./ui/Button";
import useDispatch from "../hooks/useDispatch";
import { ACTION_TYPES } from "../context/reducer";

const GenerateMoreFormsBtn = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleMoreForms = () => {
    if (!dispatch) return;
    dispatch({ type: ACTION_TYPES.RESET_FORM_ELEMENTS });
    router.push("/");
  };

  return (
    <Button variant="primary" onClick={handleMoreForms}>
      Generate More Forms
    </Button>
  );
};

export default GenerateMoreFormsBtn;
