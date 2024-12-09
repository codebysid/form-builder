import { getUserId } from "@/actions/user";
import { auth } from "../utils/auth";
import { allForms } from "@/actions/form";
import DisplayForms from "../components/DisplayForms";
import { toast } from "react-toastify";

const page = async () => {
  const session = await auth();
  if (!session?.user?.email) return;
  const userId = await getUserId(session?.user?.email);
  if (!userId) return;
  const allFormsData = await allForms(userId);
  return (
    <div className="flex flex-col justify-center items-center w-[99vw] lg:w-[95vw]">
      <DisplayForms allFormsData={allFormsData} />
    </div>
  );
};

export default page;
