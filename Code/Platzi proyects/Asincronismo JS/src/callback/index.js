function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(4,7,sum))


let change = false;

// // function reverse(i) {
// //     change = !change;
// //     console.log("change is",change, "execution " + i);
// // }
// // console.log("change is ",change, "execution -0");

// // for(let i = 1; i < 11; i++) {
// //     let time = i * 1000;
// //     setTimeout(function() {
// //         reverse(i)
// //     },time)
// // }

