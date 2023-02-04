/*
const numbers = [1, 2, 3, 4];

let rta = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 2 === 0) {
        rta = true;
        break;
    }
}

console.log(rta);
*/


//At least one elemet is a number
const numbers = [1];

let rta = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % element === 0) {
        rta = true;
        break;
    }
}

console.log(rta);