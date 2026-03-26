export interface MenuItem {
  name: string;
  price: number;
  description?: string;
  category: string;
  serves?: string;
  image?: string;
}

export interface Category {
  id: string;
  name: string;
}
