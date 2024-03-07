import { RequestHandler } from "express";
import ProductModel from "../models/product";
import UserModel from "../models/user";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import sharp from "sharp";

export const getProducts: RequestHandler = async (req, res, next) => {
  try {
    const products = await ProductModel.find().sort({ createdAt: -1 }).exec();

    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

export const getProduct: RequestHandler = async (req, res, next) => {
  const productId = req.params.productId;

  try {
    if (!mongoose.isValidObjectId(productId)) {
      throw createHttpError(400, "ProductId is invalid");
    }

    const product = await ProductModel.findById(productId).exec();

    if (!product) {
      throw createHttpError(404, "Product not found");
    }

    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

interface CreateProductBody {
  name?: string;
  description?: string;
  images: Express.Multer.File[] | null;
}

export const createProduct: RequestHandler<
  unknown,
  unknown,
  CreateProductBody,
  unknown
> = async (req, res, next) => {
  const name = req.body.name;
  const description = req.body.description;
  const testImages = req.files;
  const creatorId = req.session.userId;

  let images: Express.Multer.File[] = [];
  let imagesIdForProduct: string = "";
  if (testImages && Array.isArray(testImages)) {
    images = [...testImages];
    imagesIdForProduct = uuidv4();
  }

  try {
    if (!name) {
      throw createHttpError(400, "Product must have a name");
    }

    if (!description) {
      throw createHttpError(400, "Product must have a description");
    }

    const creator = await UserModel.findById(creatorId)
      .select(" +email")
      .exec();

    if (!creator) {
      throw createHttpError(404, "Creator not found");
    }

    const newProduct = await ProductModel.create({
      name: name,
      description: description,
      imagesId: imagesIdForProduct,
      creator: creator, // Assigning creator object to the product
      images: await Promise.all(
        images.map(async (image) => {
          const uniqueId = uuidv4();
          const metadata = await sharp(image.buffer).metadata();

          return {
            data: image.buffer,
            contentType: image.mimetype,
            id: uniqueId,
            link: `http://localhost:5000/api/products/images/${imagesIdForProduct}/${uniqueId}`,
            height: metadata.height,
            width: metadata.width,
          };
        })
      ),
    });

    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

interface UpdateProductBody {
  name?: string;
  description?: string;
}

interface UpdateProductParams {
  productId: string;
}

export const updateProduct: RequestHandler<
  UpdateProductParams,
  unknown,
  UpdateProductBody,
  unknown
> = async (req, res, next) => {
  const productId = req.params.productId;
  const newName = req.body.name;
  const newDescription = req.body.description;

  try {
    if (!newName) {
      throw createHttpError(400, "Product must have a name");
    }

    if (!newDescription) {
      throw createHttpError(400, "Product must have a description");
    }

    if (!mongoose.isValidObjectId(productId)) {
      throw createHttpError(400, "ProductId is invalid");
    }

    const product = await ProductModel.findById(productId).exec();

    if (!product) {
      throw createHttpError(404, "Product not found");
    }

    product.name = newName;
    product.description = newDescription;

    const updatedProduct = await product.save();

    res.status(200).json(updatedProduct);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct: RequestHandler = async (req, res, next) => {
  const productId = req.params.productId;

  try {
    if (!mongoose.isValidObjectId(productId)) {
      throw createHttpError(400, "ProductId is invalid");
    }

    const product = await ProductModel.findById(productId).exec();

    if (!product) {
      throw createHttpError(404, "Product not found");
    }

    await ProductModel.findByIdAndRemove(productId);

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

export const getImage: RequestHandler = async (req, res, next) => {
  const productImagesId = req.params.productImagesId;
  const imageId = req.params.imageId;

  try {
    const product = await ProductModel.findOne({
      imagesId: productImagesId,
    }).exec();

    if (!product || !product.images || product.images.length === 0) {
      // Handle not found or no images
      console.log("Here is the problem");
      return res.sendStatus(404);
    }

    // Find the image with the specified contentType
    const selectedImage = product.images.find((image) => image.id === imageId);

    if (!selectedImage) {
      return res.sendStatus(404);
    }

    // Set the content type and send the image data
    res.set("Content-Type", selectedImage.contentType);
    res.send(selectedImage.data);
  } catch (error) {
    next(error);
  }
};
