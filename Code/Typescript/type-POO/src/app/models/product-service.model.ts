import { CreateProductDto, UpdateProductDto } from '../dto/product.dto';
import { Product } from './product.models';

export interface ProductService {
  getAll(): Product[];
  update(id: Product['id'], changes: UpdateProductDto): Product;
  create(dta: CreateProductDto): Product;
  findOne(id: Product['id']): Product | undefined;
}
