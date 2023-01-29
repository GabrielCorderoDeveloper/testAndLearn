/*
const letters = ["a", "b", "c", "d"];

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log("for", element);
}

letters.forEach(element => {
    console.log("foreach", element)
});
*/

const menu = [
    { title: "pizza" , price: "25$" },
    { title: "hamburger" , price: "20$" },
    { title: "pasta" , price: "20$" },
];

menu.forEach(element => {
    console.log(`Comida: ${element.title} = ${element.price}`)
});