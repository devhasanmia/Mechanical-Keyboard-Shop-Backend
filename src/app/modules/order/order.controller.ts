import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { OrderService } from "./order.service";

const createOrder: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const payload = req.body;
    const order = await OrderService.createOrder(payload);
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Order created successfully!",
      data: order,
    });
  }
);

const getOrders: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const orders = await OrderService.getOrders();
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Orders fetched successfully!",
      data: orders,
    });
  }
);

const getOrderById: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const orderId = req.params.orderId;
    const order = await OrderService.getOrderById(orderId);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Order fetched successfully!",
      data: order,
    });
  }
);

const updateOrder: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const orderId = req.params.orderId;
    const payload = req.body;
    const updatedOrder = await OrderService.updateOrder(orderId, payload);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Order updated successfully!",
      data: updatedOrder,
    });
  }
);

const deleteOrder: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const orderId = req.params.orderId;
    await OrderService.deleteOrder(orderId);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Order deleted successfully!",
    });
  }
);

export const OrderController = {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
};
