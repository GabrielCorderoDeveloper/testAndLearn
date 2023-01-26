const matriz = [
    [1,3,5,6],
    [5,4,8,9],
    [3,4, [3,3,3, [4,4,4] ], [9,9,9]]
];

function aplanarMatriz(matriz) {
    let array = [];

    for (element of matriz) {
        if (Array.isArray(element)) {
            array = array.concat(aplanarMatriz(element))
        } else {
            array.push(element);
        }
    }
    return array;
}

console.log(aplanarMatriz(matriz));