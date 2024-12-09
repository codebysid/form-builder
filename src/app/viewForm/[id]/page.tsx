import { getForm } from "@/actions/form";
import RenderFormName from "@/app/components/RenderFormName";
import ViewForm from "@/app/components/ViewForm";
import { ObjectId } from "mongoose";

const page = async ({ params }: { params: Promise<{ id: ObjectId }> }) => {
  const id = (await params).id;
  const form = await getForm(id);
  const formData = JSON.parse(form.formData);

  return (
    <div className="flex flex-col justify-center items-center border w-[99vw] lg:w-[95vw]">
      <ViewForm formData={formData} />
    </div>
  );
};

export default page;
