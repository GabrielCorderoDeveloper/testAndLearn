let sum = 0;
console.time('timing');

for (let i = 0; i < 100000000; i++) {
    sum += 1;
}
console.timeEnd('timing');