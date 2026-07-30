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