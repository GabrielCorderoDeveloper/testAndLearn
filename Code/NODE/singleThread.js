// console.log('hi')

let i = 0;
const timer = setInterval(() => {
    i++
    console.log(i);

    if (i == 5) {
        clearInterval(timer);
    }
}, 1000)