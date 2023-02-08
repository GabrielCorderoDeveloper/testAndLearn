const url = "https://platzi-avo.vercel.app/api/avo";

/* Recibiendo objetos con JSON
window.fetch(url).then((respuesta) => respuesta.json())
.then((data) => {
    console.log(data);
});
*/

//Recibiendo la propiedad "Nombre" de los objetos
window.fetch(url).then((respuesta) => respuesta.json())
.then((responseJson) => {
    const todosLosItems = [];
    responseJson.data.forEach((item) => {
        //creando la imagen
        const imagen = document.createElement('img');

        //creando el titulo
        const titulo = document.createElement('h2');

        //creando el precio
        const precio = document.createElement('div'); 

        const container = document.createElement('div')
        container.append(imagen, titulo, precio);

        todosLosItems.push(container);
    });

    document.body.append(...todosLosItems)
});

/*
Lo mismo pero con Async y Await

const url = "https://platzi-avo.vercel.app/api/avo";

//web api
async function fetchData() {
  const response = await fetch(url),
  data = await response.json(),
  allItems = [];

  data.data.forEach((item) => {
    // create image
    const image = document.createElement("img");
    // create title
    const title = document.createElement("h2");
    // create price
    const price = document.createElement("div");

    const container = document.createElement("div");
    container.append(image, title, price);

    allItems.push(container);
  });

  document.body.append(...allItems)
}

fetchData();
*/