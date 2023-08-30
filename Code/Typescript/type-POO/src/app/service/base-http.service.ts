import { Category } from './../models/category.model';
import { Product } from './../models/product.models';


import axios from 'axios';

export class BaseHttpService<TypeClass> {
  // private data: TypeClass[] = [];

  constructor(
    private url: string
  ) {}

  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url)
    return data;
  }
}

// const service = new BaseHttpService<string>();
// service.getAll();

// const service1 = new BaseHttpService<number>();
// service1.getAll();

(async () => {
  const url1 = 'https://api.escuelajs.co/api/v1/products';
  const productService = new BaseHttpService<string>(url1);

  const rta = await productService.getAll();
  console.log('products', rta.length);


  const categoryService = new BaseHttpService<string>(url1);

  const rta1 = await productService.getAll();
  console.log('categories', rta1.length);
})();
