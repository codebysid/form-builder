import { model, models, Schema } from "mongoose";

const formSchema = new Schema(
  {
    formData: {
      type: String,
      required: true,
    },
    formName: {
      type: String,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Form = models?.Form || model("Form", formSchema);

export default Form;
