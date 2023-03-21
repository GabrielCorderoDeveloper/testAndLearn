import { Category } from '../categories/category.mode'
import { Basemodel } from '../base.model'

export type Siezes = 'S' | 'M' | 'L' | 'XL';

export interface Product extends Basemodel{
  title: string;
  image: string;
  description: string;

  stock: number;
  size?: Siezes,
  color: string;
  price: number;

  category: Category;
  isNew: boolean;
  tags: string[];
}


