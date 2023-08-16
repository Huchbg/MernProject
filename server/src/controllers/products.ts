import { RequestHandler } from "express"
import ProductModel from "../models/product"

export const getProducts: RequestHandler = async (req, res, next) => {
  try {
    const products = await ProductModel.find().exec()
    res.status(200).json(products)
  } catch (error) {
    next(error)
  }
}

export const createProduct: RequestHandler = async (req, res, next) => {
  const name = req.body.name
  const description = req.body.description

  try {
    const newProduct = await ProductModel.create({
      name: name,
      description: description,
    })

    res.status(201).json(newProduct)
  } catch (error) {
    next(error)
  }
}
