"use server";

import connectToMongo from "@/app/utils/connectToMongo";
import User from "@/models/User";

export async function getUserId(email: string) {
  if (!email) return;
  try {
    await connectToMongo();
    const user = await User.findOne({ email });
    if (!user)
      return JSON.parse(
        JSON.stringify({ success: false, message: "no user found" })
      );
    return JSON.parse(
      JSON.stringify({ success: true, message: "user found", id: user._id })
    );
  } catch (err) {
    console.log(err);
  }
}
