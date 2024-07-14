import { TOrder } from "./order.interface";
import Order from "./order.model";

const createOrder = async (payload: TOrder) => {
  const order = Order.create(payload);
  return order;
};

const getOrders = async () => {
  const orders = await Order.find();
  return orders;
};

const getOrderById = async (id: string) => {
  const order = await Order.findById(id);
  return order;
};

const updateOrder = async (id: string, payload: any) => {
  const order = await Order.findByIdAndUpdate(id, payload, { new: true });
  return order;
};

const deleteOrder = async (id: string) => {
  const order = await Order.findByIdAndDelete(id);
  return order;
};

export const OrderService = {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder
};
