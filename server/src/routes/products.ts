import express from "express";
import * as ProductsController from "../controllers/products";

const router = express.Router();

router.get("/", ProductsController.getProducts);

router.get("/:productId", ProductsController.getProduct);

router.post("/", ProductsController.createProduct);

router.patch("/:productId", ProductsController.updateProduct);

router.delete("/:productId", ProductsController.deleteProduct);

export default router;
