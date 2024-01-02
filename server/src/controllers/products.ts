import { RequestHandler } from "express";
import ProductModel from "../models/product";
import createHttpError from "http-errors";
import mongoose from "mongoose";

export const getProducts: RequestHandler = async (req, res, next) => {
  try {
    const products = await ProductModel.find().exec();
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
}

export const createProduct: RequestHandler<
  unknown,
  unknown,
  CreateProductBody,
  unknown
> = async (req, res, next) => {
  const name = req.body.name;
  const description = req.body.description;

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
    });

    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};
