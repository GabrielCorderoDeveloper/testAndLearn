const numeritos = [1,2,6,8,9,4,5,386,348,1972,10,2,3,1];
/*
for (let index = 0; index < numeritos.length; index++) {
    numerito = numeritos[index];
    console.log(index,numerito);
}
*/

function recursiva(parametro) {
    if(parametro.length != 0) {
        const firstNum = parametro[0];
        console.log(firstNum);

        parametro.shift();
        recursiva(parametro);
    }
}

recursiva(numeritos);