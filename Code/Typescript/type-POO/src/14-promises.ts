import axios from "axios";

(async() => {

  function delay(time: number) {
    const promise = new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
    return promise;
  }

  function getProducts() {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }

  console.log('---'.repeat(10));
  const rta = await delay(3000);
  console.log(rta);

  //2?       Using AXIOS <----------------
  console.log('---'.repeat(10));
  const products = await getProducts();
  console.log(products.data);
})();
