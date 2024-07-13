import express from "express";
import { ProductController } from "./product.controller";
const router = express.Router();

router.post("/create", ProductController.createProduct);
router.get("/", ProductController.getProducts);
router.get("/:productId", ProductController.getProductById);
router.put("/:productId", ProductController.updateProduct);
router.delete("/:productId", ProductController.deleteProduct);

export const productRoutes = router;
