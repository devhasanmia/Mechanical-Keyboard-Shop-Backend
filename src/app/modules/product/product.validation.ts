import { z } from "zod";

const productValidationSchema = z.object({
  name: z
    .string({
      required_error: "Product name is required",
      invalid_type_error: "Product name must be a string",
    })
    .min(1, "Product name cannot be empty"),
  brand: z
    .string({
      required_error: "Product brand is required",
      invalid_type_error: "Product brand must be a string",
    })
    .min(1, "Product brand cannot be empty"),
  availableQuantity: z
    .number({
      required_error: "Available quantity is required",
      invalid_type_error: "Available quantity must be a number",
    })
    .int("Available quantity must be an integer")
    .min(0, "Available quantity must be 0 or more"),
  price: z
    .number({
      required_error: "Price is required",
      invalid_type_error: "Price must be a number",
    })
    .positive("Price must be a positive number"),
  rating: z
    .number({
      invalid_type_error: "Rating must be a number",
    })
    .min(0, "Rating must be 0 or more")
    .max(5, "Rating must be 5 or less")
    .optional(),
  description: z
    .string({
      required_error: "Description is required",
      invalid_type_error: "Description must be a string",
    })
    .min(1, "Description cannot be empty"),
  image: z.string({
    required_error: "Image URL is required",
    invalid_type_error: "Image must be a valid URL",
  }),
});

export const validateProduct = {
  create: productValidationSchema,
};
