
export interface Product {
  id: number;
  name: string;
  brand: string;
  category: "headphones" | "earbuds" | "accessories";
  price: number;
  salePrice?: number;
  rating: number;
  description: string;
  features: string[];
  colors: string[];
  images: string[];
  isWireless: boolean;
  isFeatured?: boolean;
  isNew?: boolean;
  stockCount: number;
}

export type SortOption = "featured" | "price-low" | "price-high" | "rating" | "name-asc" | "name-desc";

export type FilterOptions = {
  category: string[];
  priceRange: [number, number];
  brand: string[];
  wireless: boolean | null;
};

export interface OrderDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  paymentMethod: "cod" | "card";
}
