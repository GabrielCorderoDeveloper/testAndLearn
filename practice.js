var containsDuplicate = function(nums) {   
    let hTable = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in hTable) {
            return true;
        } else {
            hTable[nums[i]] = 1;
        }
    }
    return false
};

let test1 = [1, 2, 3, 1];
let test2 = [1, 2, 3, 4];

console.log(containsDuplicate(test2))



//2! FizzBuzz ------------------------------>>>>>

//2? For loop solution ---------------->
for (let i =1; i < 101; i++) {
    if (i % 15 === 0) {
        console.log('FIZZBUZZ');
    } else if (i % 3 === 0) {
        console.log('FIZZ');
    } else if (i % 5 === 0) {
        console.log('BUZZ');
    } else {
        console.log(i);
    }
}



//2? While loop solution ---------------->
// let i = 0;
while (i < 100) {
    i++;

    if (i % 15 === 0) {
        console.log('FIZZBUZZ');
    } else if (i % 3 === 0) {
        console.log('FIZZ');
    } else if (i % 5 === 0) {
        console.log('BUZZ');
    } else {
        console.log(i);
    }
}



//2? Do while loop solution ---------------->
let i = 0;

do {
    if (i % 15 === 0) {
        console.log('FIZZBUZZ');
    } else if (i % 3 === 0) {
        console.log('FIZZ');
    } else if (i % 5 === 0) {
        console.log('BUZZ');
    } else {
        console.log(i);
    }
    i++;
}
while(i < 101);