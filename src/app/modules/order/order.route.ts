import express from "express";
import { OrderController } from "./order.controller";
import validateRequest from "../../middlewares/validateRequest";
import orderValidationSchema from "./order.validation";
const router = express.Router();

router.post(
  "/",
  validateRequest(orderValidationSchema),
  OrderController.createOrder
);
router.get("/", OrderController.getOrders);
router.get("/:orderId", OrderController.getOrderById);
router.put("/:orderId", OrderController.updateOrder);
router.delete("/:orderId", OrderController.deleteOrder);

export const orderRoutes = router;
