import express from "express";
import upload from "../middleware/ImageRouter";
import * as ProductsController from "../controllers/products";

const router = express.Router();

router.get("/", ProductsController.getProducts);

router.get("/:productId", ProductsController.getProduct);

router.post("/", upload.array("images", 5), ProductsController.createProduct);

router.patch("/:productId", ProductsController.updateProduct);

router.delete("/:productId", ProductsController.deleteProduct);

router.get("/images/:productImagesId/:imageId", ProductsController.getImage);

export default router;
