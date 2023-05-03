//~Creating an overloadddd!!!!

export function parseStr(input: string): string;
export function parseStr(input: string[]): string;
//1? Here i'm telling the function what it will return according to each input.


export function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); //2! returns a string
  } else {
    return input.split(''); //2! returns an string[Array]
  }
}

const response = parseStr('Nico');
console.log('resoonse 1 ', 'Nico => ', response);

const response2 = parseStr(['N','i','c','o']);
console.log('resoonse 2 ',"['N','i','c','o'] => ", response2);

