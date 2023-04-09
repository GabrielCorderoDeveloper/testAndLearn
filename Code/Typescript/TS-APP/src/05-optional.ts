export const createProduct = (
  id: string | number,
  stock?: number,
  isNew?: boolean
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true,   //?Default option in case of not receiving the parameter.
  }
}

const p1 = createProduct(1, 12, true);
console.log(p1);

const p2 = createProduct(2);
console.log(p2);
