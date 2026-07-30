export interface RegisterValues {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  role: "CUSTOMER" | "PROVIDER";
}

export interface IUser {
  success: boolean;
  message: string;
  data: {
    profile: {
      id: string;
      name: string;
      email: string;
      activeStatus: string;
      role: string;
      createdAt: string;
      updatedAt: string;
      profile: {
        id: string;
        profilePhoto: string;
        bio: string | null;
        userId: string;
        createdAt: string;
        updatedAt: string;
      };
    };
  };
}

export type CustomerUser = {
  id: string;
  name: string;
  email: string;
  address: string;
  photoUrl: string | null;
  phone: string;
  role: "CUSTOMER" | "PROVIDER" | "ADMIN";
  status: "ACTIVE" | "INACTIVE";
  createdAt: string;
  updatedAt: string;
};

export type CustomerDashboardProps = {
  user: CustomerUser;
};

export interface JwtPayload {
  id: string;
  name: string;
  email: string;
  role: "CUSTOMER" | "PROVIDER" | "ADMIN";
  iat?: number;
  exp?: number;
}

export type Gear = {
  id: string;
  name: string;
  description: string;
  pricePerDay: number;
  quantityTotal: number;
  quantityAvailable: number;
  images: string[];
};

export type Category = {
  id: string;
  name: string;
  description?: string | null;
  createdAt?: string;
  updatedAt?: string;
};

export type CreateCategoryData = {
  name: string;
  description?: string;
};

export type UpdateCategoryData = {
  name?: string;
  description?: string;
};

export type UserStatus = "ACTIVE" | "BLOCKED";

export type UpdateUserData = {
  status?: UserStatus;
  role?: "CUSTOMER" | "PROVIDER" | "ADMIN";
};

export type CreatePaymentData = {
  orderId: string;
  amount: number;
  paymentMethod: "STRIPE";
};

export type ConfirmPaymentData = {
  paymentId: string;
  transactionId: string;
  status: "SUCCESS" | "FAILED";
};

export type CreateGearData = {
  name: string;
  description: string;
  brand: string;
  categoryId: string;
  pricePerDay: number;
  quantityTotal: number;
  images: string[];
};

export type UpdateGearData = Partial<CreateGearData>;

export type UpdateOrderStatusData = {
  status: "PENDING" | "CONFIRMED" | "CANCELLED" | "COMPLETED";
};

export type CreateRentalData = {
  gearId: string;
  startDate: string;
  endDate: string;
  quantity: number;
};

export type CreateReviewData = {
  gearId: string;
  rating: number;
  comment: string;
};
