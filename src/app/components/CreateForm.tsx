import FormBody from "./FormBody";
import FormName from "./FormName";

const CreateForm = () => {
  return (
    <div className=" flex flex-col justify-center items-center w-[95vw]">
      <FormName />
      <FormBody />
    </div>
  );
};

export default CreateForm;
