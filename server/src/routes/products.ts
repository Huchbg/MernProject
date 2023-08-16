import express from "express"
import * as ProductsController from "../controllers/products"

const router = express.Router()

router.get("/", ProductsController.getProducts)

router.post("/", ProductsController.createProduct)

export default router
