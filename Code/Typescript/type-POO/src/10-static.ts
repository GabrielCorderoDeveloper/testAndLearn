class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    let sum: number = numbers[0];

    // for (let index = 0; index < numbers.length; index++) {
    //   //~ It will chechk if the current number is bigger than sum(which starts being the first value on the array)
    //   if (numbers[index] > sum){
    //     sum = numbers[index];
    //   }

    //   //~ When it's done reading the array it will return the value sum(which is the biggest number)
    //   if (index === (numbers.length - 1)) {
    //     return sum;
    //   }
    // }
    //2? I can also use reduce to do the same
    return numbers.reduce((max, item) => max >= item ? max: item, numbers[0])
  }
}

console.log(MyMath.PI);
console.log(MyMath.max(-2, -4, -30, -1, 1));

