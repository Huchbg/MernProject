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
    imagesId: {
      type: String,
      required: true,
    },
    images: [
      {
        data: Buffer,
        contentType: String,
        id: String,
        link: String,
        height: Number,
        width: Number,
      },
    ],
    creator: {
      username: String,
      email: String,
      _id: String,
    },
  },
  { timestamps: true }
);

type Product = InferSchemaType<typeof productSchema>;

export default model<Product>("Product", productSchema);
