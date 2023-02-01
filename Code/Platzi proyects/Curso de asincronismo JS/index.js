function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log( calc(2, 2, sum) );

setTimeout(function () {
    console.log("Hola");
}, 2000);

//Callback sencillo

function saludar(nombre) {
    console.log(`Hola ${nombre}, ten un buen dia!`);
}

setTimeout(saludar, 2000, "Gabriel");