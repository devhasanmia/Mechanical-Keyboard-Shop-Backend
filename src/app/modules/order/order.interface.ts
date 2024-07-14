export type TOrder = {
  name: string;
  email: string;
  mobile: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  products: Array<{ productId: string; quantity: number }>;
};
