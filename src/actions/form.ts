"use server";

import connectToMongo from "@/app/utils/connectToMongo";
import Form from "@/models/Form";
import { ObjectId } from "mongoose";

export async function saveForm(formData: string, id: ObjectId) {
  if (!formData) return;
  try {
    await connectToMongo();
    const form = await Form.create({ formData, createdBy: id });
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

export async function allForms(id: ObjectId) {
  if (!id) return;
  const pipeline: any[] = [
    {
      $match: {
        createdBy: id,
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "createdBy",
        foreignField: "email",
        as: "result",
      },
    },
    {
      $unwind: {
        path: "$result",
        preserveNullAndEmptyArrays: true,
      },
    },
    { $sort: { createdAt: -1 } },
  ];
  try {
    await connectToMongo();
    const allForms = await Form.aggregate(pipeline);
    console.log({ allForms });
    return null;
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
    console.log({ form });
    return JSON.parse(JSON.stringify(form));
  } catch (err) {
    console.log(err);
  }
}
