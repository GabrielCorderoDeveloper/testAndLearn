// const promise = new Promise(function (resolve, reject) {
//     resolve('hey!')
// });

const cows = 15;

const countCows = new Promise(function (resolve, reject) {
    if (cows > 10) {
        resolve('Hay suficientes vacas');
    } else {
        reject('no tenemos suficientes vacas');
    }
});

countCows.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log('termine')
});

//^ Finally se ejecuta SIEMPRE, al final.