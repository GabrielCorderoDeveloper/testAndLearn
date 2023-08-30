//
// function getValue(value: number | string) {
//     return value;
// }


function getValue<myType>(value: myType) {
    return value;
}

getValue<number>(12).toFixed();
getValue<string>('12').toLocaleLowerCase();
