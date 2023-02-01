const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join("--"));

let rta = "";
const separator = "--";

for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    if (index === element.length - 1) {
        rta = rta + element;
    } else {
        rta = rta + element + separator;
    }
}
console.log(rta);


//to article url

let article = "Este es la industria de mayor crecimiento"
console.log("Original", article)

let finalUrl = article.split(" ").join("-").toLocaleLowerCase();
console.log("www." + finalUrl + ".com");