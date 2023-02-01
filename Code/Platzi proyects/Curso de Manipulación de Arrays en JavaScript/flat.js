const matriz = [
    [1,3,5,6],
    [5,4,8,9],
    [3,4, [2,3,4, [4,3,4] ], [3,9,9]]
];

const newArray = [];

for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];

    for (let j = 0; j < array.length; j++) {
        const element = array[j];
        newArray.push(element);
    }
}

console.log("for",newArray);

const rta = matriz.flat(3);
console.log("flat",rta); 

