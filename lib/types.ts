export interface RegisterValues {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  role: "CUSTOMER" | "PROVIDER";
}