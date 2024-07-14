import { z } from "zod";

export const orderValidationSchema = z.object({
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Please enter a valid name",
  }),
  email: z.string().email("Invalid email address"),
  mobile: z
    .string({
      required_error: "Mobile number is required",
      invalid_type_error: "Please enter a valid mobile number",
    })
    .regex(/^\d{11}$/, "Mobile number must be 11 digits"),
  address: z.string({
    required_error: "Address is required",
    invalid_type_error: "Please enter a valid address",
  }),
  city: z.string({
    required_error: "City is required",
    invalid_type_error: "Please enter a valid city",
  }),
  state: z.string({
    required_error: "State is required",
    invalid_type_error: "Please enter a valid state",
  }),
  zipCode: z.string({
    required_error: "Zip code is required",
    invalid_type_error: "Please enter a valid zip code",
  }),
  products: z
    .array(
      z.object({
        productId: z.string({
          required_error: "Product ID is required",
          invalid_type_error: "Please enter a valid product ID",
        }),
        quantity: z
          .number({
            required_error: "Quantity is required",
            invalid_type_error: "Please enter a valid quantity",
          })
          .min(1, "Quantity must be at least 1"),
      })
    )
    .nonempty("Products are required"),
});

export default orderValidationSchema;
