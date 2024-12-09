"use server";

import connectToMongo from "@/app/utils/connectToMongo";
import Form from "@/models/Form";
import mongoose, { ObjectId } from "mongoose";

export async function saveForm(
  formData: string,
  id: ObjectId,
  formName: string
) {
  if (!formData || !formName) return;
  try {
    await connectToMongo();
    const form = await Form.create({ formData, createdBy: id, formName });
    if (!form) throw new Error("unable to save form right now");
    return JSON.parse(
      JSON.stringify({
        success: true,
        status: 200,
        message: "Form saved successfully",
        id: form._id,
      })
    );
  } catch (err) {
    console.log(err);
  }
}

export async function allForms(id: string) {
  if (!id) return;
  const pipeline: any[] = [
    [
      {
        $match: {
          createdBy: new mongoose.Types.ObjectId(id),
        },
      },
    ],
  ];
  try {
    await connectToMongo();
    const allForms = await Form.aggregate(pipeline);
    return JSON.parse(JSON.stringify(allForms));
  } catch (err) {
    console.log(err);
  }
}

export async function getForm(id: ObjectId) {
  if (!id) return;
  try {
    await connectToMongo();
    const form = await Form.findOne({ _id: id });
    if (!form) return;
    return JSON.parse(JSON.stringify(form));
  } catch (err) {
    console.log(err);
  }
}
