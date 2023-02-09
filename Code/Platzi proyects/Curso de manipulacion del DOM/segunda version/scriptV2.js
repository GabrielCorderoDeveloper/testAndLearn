const baseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector('#app')

appNode.addEventListener("click", (event) => {
    if (event.target.nodeName === "H2") {
        window.alert("hola");
    }
})

const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat("en-EN", {
        style: "currency",
        currency: "USD",
    }).format(price);
    return newPrice;
}

/* Recibiendo objetos con JSON
window.fetch(url).then((respuesta) => respuesta.json())
.then((data) => {
    console.log(data);
});
*/

//Recibiendo la propiedad "Nombre" de los objetos
window.fetch(`${baseUrl}/api/avo`).then((respuesta) => respuesta.json())
.then((responseJson) => {
    const todosLosItems = [];
    responseJson.data.forEach((item) => {
        //creando la imagen
        const imagen = document.createElement('img');
        imagen.src = `${baseUrl}${item.image}`;

        //creando el titulo
        const titulo = document.createElement('h2');
        titulo.textContent = item.name;
        titulo.style = "font-size: 2rem"

        //creando el precio
        const precio = document.createElement('div'); 
        precio.textContent = formatPrice(item.price);


        const container = document.createElement('div')
        container.append(imagen, titulo, precio);

        todosLosItems.push(container);
    });

    appNode.append(...todosLosItems)
});
