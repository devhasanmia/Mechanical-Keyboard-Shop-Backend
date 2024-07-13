import { Request, RequestHandler, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { ProductService } from "./product.service";
import httpStatus from "http-status";

const createProduct: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const payload = req.body;
    const product = await ProductService.createProduct(payload);
    res.status(httpStatus.OK).json({
      statusCode: httpStatus.CREATED,
      message: "Product created successfully!",
      success: true,
      data: product,
    });
  }
);

const getProducts: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const products = await ProductService.getProducts();
    res.status(httpStatus.OK).json({
      statusCode: httpStatus.OK,
      message: "Products fetched successfully!",
      success: true,
      data: products,
    });
  }
);

const getProductById: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const productId = req.params.productId;
    const product = await ProductService.getProductById(productId);
    res.status(httpStatus.OK).json({
      statusCode: httpStatus.OK,
      message: "Product fetched successfully!",
      success: true,
      data: product,
    });
  }
);

const updateProduct: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const productId = req.params.productId;
    const payload = req.body;
    const updatedProduct = await ProductService.updateProduct(
      productId,
      payload
    );
    res.status(httpStatus.OK).json({
      statusCode: httpStatus.OK,
      message: "Product updated successfully!",
      success: true,
      data: updatedProduct,
    });
  }
);

const deleteProduct: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const productId = req.params.productId;
    await ProductService.deleteProduct(productId);
    res.status(httpStatus.OK).json({
      statusCode: httpStatus.OK,
      message: "Product deleted successfully!",
      success: true,
    });
  }
);

export const ProductController = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
