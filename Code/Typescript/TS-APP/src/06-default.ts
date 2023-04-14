export const createProduct = (
  id: string | number,
  stock: number = 10,
  isNew: boolean = true  //?Default option in case of not receiving the parameter.
) => {
  return {
    id,
    stock,
    isNew,
  }
}

const p1 = createProduct(1, 12, true);
console.log(p1);

const p2 = createProduct(2);
console.log(p2);
