import { toast } from "sonner";
import FormCard from "./FormCard";
import GenerateMoreFormsBtn from "./GenerateMoreFormsBtn";

interface IDisplayForms {
  allFormsData: any[];
}
const DisplayForms = ({ allFormsData }: IDisplayForms) => {
  if (!allFormsData || allFormsData.length < 1) {
    toast.warning("No forms, create a form first");
  }
  return (
    <div className=" border flex flex-col justify-start gap-10 items-center w-10/12 lg:w-2/5 h-[98vh] px-5 py-5 overflow-y-scroll">
      {allFormsData.map((ele) => {
        return (
          <FormCard
            key={ele._id}
            formName={ele.formName || "Untitled Form"}
            url={`${process.env.NEXT_PUBLIC_FRONTEND_URI}/viewForm/${ele._id}`}
          />
        );
      })}
      <GenerateMoreFormsBtn />
    </div>
  );
};

export default DisplayForms;
