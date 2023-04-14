function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); //? returns a string
  } else {
    return input.split(''); //? returns an string[Array]
  }
}

const response = parseStr('Nico');
console.log('resoonse 1 ', 'Nico => ', response);

const response2 = parseStr(['N','i','c','o']);
console.log('resoonse 2 ',"['N','i','c','o'] => ", response2);
