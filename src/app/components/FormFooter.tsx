"use client";
import { useRouter } from "next/navigation";
import useCtxState from "../hooks/useCtxState";
import Icons from "./Icons";
import Button from "./ui/Button";
import { saveForm } from "@/actions/form";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { useActionState, useEffect } from "react";
import Loader from "./Loader";
import useDispatch from "../hooks/useDispatch";
import { ACTION_TYPES } from "../context/reducer";

const FormFooter = () => {
  const state = useCtxState();
  const router = useRouter();
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const [actionState, action, isPending] = useActionState(saveForm, "");
  const handleClick = () => router.push("/renderForm");

  useEffect(() => {
    if (!isPending && actionState.success) {
      dispatch && dispatch({ type: ACTION_TYPES.RESET_FORM_ELEMENTS });
      toast.success("Form Saved");
    }
  }, [isPending]);

  return (
    <div className=" flex flex-row items-center justify-between w-[84%] lg:w-[38%] p-4 border border-t-transparent bg-[#F6F8FAE5] fixed z-10 bottom-[2px]">
      <Button
        disabled={state && state?.formElements?.length > 0 ? false : true}
        icon={<Icons name="draftIcon" />}
        variant="outline"
        iconDirection="left"
        className=" whitespace-nowrap"
        onClick={handleClick}
      >
        Save as draft
      </Button>
      <form action={action}>
        <input
          type="text"
          value={JSON.stringify({
            formData: state?.formElements,
            formName: state?.formName || "Untitled Form",
            email: session?.user?.email,
          })}
          name="value"
          readOnly
          hidden
        />
        <Button
          disabled={state && state?.formElements?.length > 0 ? false : true}
          type="submit"
          icon={isPending ? <Loader /> : <Icons name="checkIcon" />}
          variant="primary"
          iconDirection="left"
        >
          Publish Form
        </Button>
      </form>
    </div>
  );
};

export default FormFooter;
