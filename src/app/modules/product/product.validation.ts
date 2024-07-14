import { z } from "zod";

const create = z.object({
  image: z.string().url({ message: "Invalid image URL" }),
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Please enter a valid name",
  }),
  brand: z.string({
    required_error: "Brand is required",
    invalid_type_error: "Please enter a valid brand",
  }),
  availableQuantity: z
    .number({
      required_error: "Available quantity is required",
      invalid_type_error: "Please enter a valid quantity",
    })
    .positive(),
  price: z
    .number({
      required_error: "Price is required",
      invalid_type_error: "Please enter a valid price",
    })
    .positive(),
  rating: z.number().optional(),
  description: z.string({
    required_error: "Description is required",
    invalid_type_error: "Please enter a valid description",
  }),
});

// Update Validation Schema All Fields Optional

const update = z.object({
  image: z.string().url({ message: "Invalid image URL" }).optional(),
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Please enter a valid name",
    })
    .optional(),
  brand: z
    .string({
      required_error: "Brand is required",
      invalid_type_error: "Please enter a valid brand",
    })
    .optional(),
  availableQuantity: z
    .number({
      required_error: "Available quantity is required",
      invalid_type_error: "Please enter a valid quantity",
    })
    .positive()
    .optional(),
  price: z
    .number({
      required_error: "Price is required",
      invalid_type_error: "Please enter a valid price",
    })
    .positive()
    .optional(),
  rating: z.number().optional(),
  description: z
    .string({
      required_error: "Description is required",
      invalid_type_error: "Please enter a valid description",
    })
    .optional(),
});

export const ProductValidationSchema = {
  create,
  update,
};
