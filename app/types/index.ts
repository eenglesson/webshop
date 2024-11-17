export type ProductTypes = {
  id: number;
  title: string;
  category: string;
  price: number;
  about: string;
  image: string;
  isAccessory: boolean;
  colors: string[];
  badges: string[];
  features: string[];
  care: string;
  sizes: string[];
};

export type NavLink = {
  label: string;
  filter: 'All' | 'Apparel' | 'Accessories';
};

export const links: NavLink[] = [
  { label: 'All', filter: 'All' },
  { label: 'Apparel', filter: 'Apparel' },
  { label: 'Accessories', filter: 'Accessories' },
];
