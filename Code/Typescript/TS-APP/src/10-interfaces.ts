type Siezes = 'S' | 'M' | 'L' | 'XL';

// // type Product = {
// //   id: string | number;
// //   title: string;
// //   createdAt: Date;
// //   stock: number;
// //   size?: Siezes,
// // }
interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Siezes,
}

const products: Product[] = [];

products.push({
  id: '1',
  title: 'p1',
  createdAt: new Date(),
  stock: 90
});
