"use client";
import { useRouter } from "next/navigation";
import useCtxState from "../hooks/useCtxState";
import Icons from "./Icons";
import Button from "./ui/Button";
import { saveForm } from "@/actions/form";
import { getUserId } from "@/actions/user";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import useDispatch from "../hooks/useDispatch";
import { ACTION_TYPES } from "../context/reducer";

const FormFooter = () => {
  const state = useCtxState();
  const router = useRouter();
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const handleClick = () => router.push("/renderForm");

  const handleSaveForm = async () => {
    if (!session?.user?.email) return;
    const data = await getUserId(session?.user?.email);
    if (!data || !data.id) return;
    const res = await saveForm(
      JSON.stringify(state?.formElements),
      data.id,
      state?.formName || "Untitled Form"
    );
    if (res?.success) {
      toast.success(
        `Form Saved, Click on "View your forms" to view all forms `,
        { position: "top-right" }
      );
      dispatch && dispatch({ type: ACTION_TYPES.RESET_FORM_ELEMENTS });
    }
  };

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
      <Button
        disabled={state && state?.formElements?.length > 0 ? false : true}
        icon={<Icons name="checkIcon" />}
        variant="primary"
        iconDirection="left"
        className=" whitespace-nowrap"
        onClick={handleSaveForm}
      >
        Publish Form
      </Button>
    </div>
  );
};

export default FormFooter;
