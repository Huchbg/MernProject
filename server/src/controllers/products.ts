import { RequestHandler } from "express";
import ProductModel from "../models/product";
import createHttpError from "http-errors";
import mongoose from "mongoose";

export const getProducts: RequestHandler = async (req, res, next) => {
  try {
    const products = await ProductModel.find().sort({ createdAt: -1 }).exec();
    const productsWithImageURL = products.map((product) => {
      return {
        ...product.toObject(),
        imageURL:
          product.image && product.image.contentType
            ? `http://localhost:5000/api/products/images/${product._id}`
            : null,
      };
    });
    res.status(200).json(productsWithImageURL);
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
  image: Express.Multer.File | null;
}

export const createProduct: RequestHandler<
  unknown,
  unknown,
  CreateProductBody,
  unknown
> = async (req, res, next) => {
  const name = req.body.name;
  const description = req.body.description;
  const image = req.file;

  console.log(name, description, image);
  try {
    if (!name) {
      throw createHttpError(400, "Product must have a name");
    }

    if (!description) {
      throw createHttpError(400, "Product must have a description");
    }

    const newProduct = await ProductModel.create({
      name: name,
      description: description,
      image: image ? { data: image.buffer, contentType: image.mimetype } : null,
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
  const productId = req.params.productId;

  try {
    const product = await ProductModel.findById(productId).exec();

    if (!product || !product.image) {
      // Handle not found or no image
      return res.sendStatus(404);
    }

    res.set("Content-Type", product.image.contentType);
    res.send(product.image.data);
  } catch (error) {
    next(error);
  }
};
