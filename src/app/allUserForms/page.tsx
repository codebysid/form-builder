import { getUserId } from "@/actions/user";
import { auth } from "../utils/auth";
import { allForms } from "@/actions/form";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loader from "../components/Loader";
const DisplayForms = dynamic(() => import("../components/DisplayForms"));

const page = async () => {
  const session = await auth();
  if (!session?.user?.email) return;
  const userId = await getUserId(session?.user?.email);
  if (!userId) return;
  const allFormsData = await allForms(userId);
  return (
    <div className="flex flex-col justify-center items-center w-[99vw] lg:w-[95vw]">
      <Suspense fallback={<Loader />}>
        <DisplayForms allFormsData={allFormsData} />
      </Suspense>
    </div>
  );
};

export default page;
