function contar(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}
console.time('duracion-del-algoritmo');
contar(5);
console.timeEnd('duracion-del-algoritmo');

function convertirString(arreglo) {
    let resultado = arreglo.map(elemento => elemento.toString());
    return resultado;
}

function dosDimensiones(valor) {
    let x = new Array(valor);
    for (let i = 0; i < valor; i++) {
        x[i] = new Array(valor).fill(0)
    }
    return x;
}

console.log(dosDimensiones(5))


let nodos = [];

for (let i = 0; 1 < 100; i++) {
    const node = document.createElement('input');
    nodos.push(node)
}

document.body.append(...nodos)