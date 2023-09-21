import { ProductMemoryService } from './service/product-memory.service';

const productsService = new ProductMemoryService();

productsService.create({
  title: 'Producto 1',
  price: 100,
  description: 'bla bla bla',
  categoryId: 12,
  images: []
});

// console.log(productsService.getAll());
// const productId = products[0].id;

// productsService.updateProduct(productId, {
//   title: 'Cambiar nombre'
// });

// const rta = productsService.findOne(productId);
// console.log(rta);
