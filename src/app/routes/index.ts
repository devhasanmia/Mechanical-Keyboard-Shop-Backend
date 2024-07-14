import { Router } from "express";
import { productRoutes } from "../modules/product/product.route";
import { orderRoutes } from "../modules/order/order.route";
const router = Router();
const moduleRoutes = [
  {
    path: "/product",
    route: productRoutes,
  },
  {
    path: "/order",
    route: orderRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
