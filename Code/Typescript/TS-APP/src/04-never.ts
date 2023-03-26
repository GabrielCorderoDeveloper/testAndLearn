const whoutEnd = () => {
  while(true) {
    console.log('Nunca pares de aprender');
  }
}

const fail = (message: string)  => {
  throw new Error(message);
}

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'es string';
  } else if(Array.isArray(input)) {
    return 'es un array';
  }
  return fail('faloooo')
}

console.log(example('hola'));
console.log(example([1,2,4,5]));
console.log(example(1)); //?It will make the fail execute stopping the program
console.log(example('hola despues del fail'));
