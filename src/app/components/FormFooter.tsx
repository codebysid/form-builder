"use client";
import useCtxState from "../hooks/useCtxState";
import Icons from "./Icons";
import Button from "./ui/Button";

const FormFooter = () => {
  const state = useCtxState();
  return (
    <div className=" flex flex-row items-center justify-between w-[38%] p-4 border border-t-transparent bg-[#F6F8FAE5] fixed z-10 bottom-[2px]">
      <Button
        disabled={state && state?.formElements?.length > 0 ? false : true}
        icon={<Icons name="draftIcon" />}
        variant="outline"
        iconDirection="left"
      >
        Save as draft
      </Button>
      <Button
        disabled={state && state?.formElements?.length > 0 ? false : true}
        icon={<Icons name="checkIcon" />}
        variant="primary"
        iconDirection="left"
      >
        Publish Form
      </Button>
    </div>
  );
};

export default FormFooter;
