export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'burgers' | 'sides' | 'drinks' | 'desserts' | 'deals';
  calories: number;
  isPopular?: boolean;
  isSpicy?: boolean;
  isVegetarian?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedOptions?: string[];
}

export interface Deal {
  id: string;
  title: string;
  description: string;
  discountPrice: number;
  originalPrice: number;
  image: string;
  expiryDate?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  points: number;
  history: string[];
}
