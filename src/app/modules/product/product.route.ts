import express from "express";
import { ProductController } from "./product.controller";
import validateRequest from "../../middlewares/validateRequest";
import { ProductValidationSchema } from "./product.validation";
const router = express.Router();

router.post(
  "/create",
  validateRequest(ProductValidationSchema.create),
  ProductController.createProduct
);
router.get("/", ProductController.getProducts);
router.get("/:productId", ProductController.getProductById);
router.put(
  "/:productId",
  validateRequest(ProductValidationSchema.update),
  ProductController.updateProduct
);
router.delete("/:productId", ProductController.deleteProduct);

export const productRoutes = router;
