function numberPlus(a: number, b: number):number {
  return a + b;
}
function arrayPlus(a: string[], b: string[]):string[] {
  return a.concat(b);
}
function stringPlus(a: string, b: string): string {
  return a + b;
}
function carPlus(carro: myCar) {
  return carro.tags.map(tag => console.log('El tag es: ',tag))
}

// type Tesla = 'Model 3' | 'Model Y' | 'Model X' | 'Model S';
// let carro: Tesla;

// carro = 'Model 3';
// carro = 'Model S';
// carro = 'Model X';
// carro = 'Model Y';

interface myCar {
  tags: string[];
  price: number;
  color: string;
}

let carro: myCar;
carro = {
  tags: ["model 3", "fast", "ev", "Eloooon"],
  price: 55000,
  color: 'white'
}

carPlus(carro);

console.log(numberPlus(5,5));
console.log(arrayPlus(['a','b','c'], ['d','e','f']));
console.log(stringPlus('Hola ', 'San Francisco'));

