import { TProduct } from "./product.interface";
import Product from "./product.model";

const createProduct = async (payload: TProduct) => {
  const product = await Product.create(payload);
  return product;
};

export const ProductService = {
  createProduct,
};
