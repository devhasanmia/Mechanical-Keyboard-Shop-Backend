import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import { ProductService } from "./product.service";

const CreateBooking: RequestHandler = catchAsync(async (req, res, next) => {
  const payload = req.body;
  const product = await ProductService.createProduct(payload);
  res.status(201).json({
    statusCode: 201,
    message: "Product created successfully!",
    success: true,
    data: product,
  });
});

export const ProductController = {
  CreateBooking,
};
