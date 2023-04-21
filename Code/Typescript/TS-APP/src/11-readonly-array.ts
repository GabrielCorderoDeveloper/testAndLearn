const numbers: number[] = [1,2,3,4,5,6];
numbers.push(4);
numbers.pop();
//~ This is a normal array in typescript.




const numbers2:ReadonlyArray<number> = [1,2,3,4,5,6];
//3!numbers2.push(4);
//3!numbers2.pop();
numbers2.filter(() => {}); //? filter is okay becouse it does not modify the array.

//1? I can't use any method to modify the array
