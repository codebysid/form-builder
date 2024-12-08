import FormBody from "./FormBody";
import FormFooter from "./FormFooter";
import FormName from "./FormName";

const CreateForm = () => {
  return (
    <div className=" flex flex-col justify-center items-center w-[95vw]">
      <FormName />
      <FormBody />
      <FormFooter />
    </div>
  );
};

export default CreateForm;
