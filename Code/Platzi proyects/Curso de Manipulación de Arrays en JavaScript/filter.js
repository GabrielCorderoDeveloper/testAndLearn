const words = ["extravagant", "niece", "snow", "ferrari", "rich", "Top G"];

const newArray = [];

for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if(item.length >= 6) {
        newArray.push(item);
    }
}

console.log("Array",newArray);
console.log("Original",words);
const rta = words.filter(item => item.length >= 6);
console.log("Rta",rta);
console.log("Original",words);