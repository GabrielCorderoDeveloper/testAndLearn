//Contador normal
/*
const values = [2, 5, 4, 4, 3, 3, 1];

const rta = values.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rta); */

//contador agrupado y generador de valores

const list = [];

for (let i=0; i < 30; i++){
    list.push(Math.floor(Math.random() * 10 + 1));
}

const rst = list.reduce((obj, value) => {
    if (value < 5) obj["1-4"] += 1;
    else if (value < 9) obj["5-8"] += 1;
    else obj["9-10"] += 1;

    return obj;
}, {
    "1-4": 0,
    "5-8": 0,
    "9-10": 0,
});

console.log(rst);
console.log(list);