import { Category } from '../models/category.model';
import { Product } from './../models/product.models'

export interface CreateProductDto extends Omit<Product, 'id' | 'category' > {
  categoryId: Category['id'];
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}

/// export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
///   readonly tags: ReadonlyArray<string>;
/// }
