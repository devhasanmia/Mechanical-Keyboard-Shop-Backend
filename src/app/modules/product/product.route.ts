import express from "express";
import { ProductController } from "./product.controller";
import validateRequest from "../../middlewares/validateRequest";
import { validateProduct } from "./product.validation";
const router = express.Router();

router.post(
  "/create",
  validateRequest(validateProduct.create),
  ProductController.CreateBooking
);

export const productRoutes = router;
