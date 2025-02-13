import { TProduct } from "./product.interface";
import Product from "./product.model";

const createProduct = (payload: TProduct) => {
  const product = Product.create(payload);
  return product;
};

const getProducts = async () => {
  const products = await Product.find();
  return products;
};

const getProductById = async (id: string) => {
  const product = await Product.findById(id);
  return product;
};

const updateProduct = async (id: string, payload: TProduct) => {
  const updatedProduct = await Product.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return updatedProduct;
};

const deleteProduct = async (id: string) => {
  const deletedProduct = await Product.findByIdAndDelete(id);
  return deletedProduct;
};

export const ProductService = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
