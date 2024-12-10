import { getForm } from "@/actions/form";
import ServerToast from "@/app/components/ServerToast";
import ViewForm from "@/app/components/ViewForm";
import { ObjectId } from "mongoose";

const page = async ({ params }: { params: Promise<{ id: ObjectId }> }) => {
  const id = (await params).id;
  const form = await getForm(id);
  return (
    <div className="flex flex-col justify-center items-center border w-[99vw] lg:w-[95vw]">
      {!form || !form.formData ? (
        <ServerToast msg="No form found" />
      ) : (
        <ViewForm formData={JSON.parse(form.formData)} />
      )}
    </div>
  );
};

export default page;
