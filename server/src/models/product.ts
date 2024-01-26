import { InferSchemaType, Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      data: Buffer, // Assuming you store the image as a buffer
      contentType: String,
    },
  },
  { timestamps: true }
);

type Product = InferSchemaType<typeof productSchema>;

export default model<Product>("Product", productSchema);
