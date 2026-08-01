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
  title: string;
  description: string;
  brand: string;
  pricePerDay: string;
  quantityTotal: number;
  quantityAvailable: number;
  images: string[];
  isActive: boolean;

  category?: {
    id: string;
    name: string;
  };
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
};

export type UpdateGearData = Partial<CreateGearData>;

export type CreateRentalData = {
  gearId: string;
  quantity: number;
  startDate: string;
  endDate: string;
};

export type CreateReviewData = {
  gearId: string;
  rating: number;
  comment: string;
};

export type GearQuery = {
  search?: string;
  brand?: string;
  category?: string;
  price?: number;
  maxPrice?: number;
  minPrice?: number;
  page?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  tags?: string[];
};

export type SearchParams = {
  search?: string;
  category?: string;
  brand?: string;
  minPrice?: string;
  maxPrice?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
};

export type Props = {
  params: Promise<{ id: string }>;
};

export type Category = {
  id: string;
  name: string;
  slug?: string;
  description?: string | null;
  createdAt?: string;
  updatedAt?: string;
};

export type GearFilterProps = {
  categories: Category[];
};

export type CreateGearData = {
  title: string;
  description: string;
  brand: string;
  categoryId: string;
  pricePerDay: number;
  quantityTotal: number;
  quantityAvailable: number;
  images: string[];
};

export interface UpdateGear {
  title?: string;

  description?: string;

  pricePerDay?: number;

  quantityTotal?: number;

  quantityAvailable?: number;
}

export type UpdateOrderStatusData = {
  status: "CONFIRMED" | "PICKED_UP" | "RETURNED" | "CANCELLED";
};

export type ProviderOrder = {
  id: string;
  quantity: number;
  status: string;

  totalPrice?: number;

  customer?: {
    name: string;
    email: string;
  };

  gear?: {
    title: string;
    images?: string[];
    pricePerDay?: number;
  };
};

export type ProviderDashboardOrder = {
  id: string;
  status: string;
  totalPrice?: number;

  gear?: {
    title: string;
  };

  customer?: {
    name: string;
  };
};

export type CustomerRental = {
  id: string;

  quantity: number;

  startDate: string;

  endDate: string;

  status: string;

  gear?: {
    title: string;
    images?: string[];
    pricePerDay: number;
  };
};

export type ConfirmPaymentRequest = {
  sessionId: string;
};

export type PaymentConfirmResponse = {
  id: string;
  transactionId: string;
  amount: string;
  method: "STRIPE";
  status: "PENDING" | "PAID" | "FAILED";
  paidAt: string | null;
};
