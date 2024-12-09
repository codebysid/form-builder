import { getForm } from "@/actions/form";
import { ObjectId } from "mongoose";
import React from "react";

const page = async ({ params }: { params: { id: ObjectId } }) => {
  const forms = await getForm(params.id);
  return <div>page</div>;
};

export default page;
