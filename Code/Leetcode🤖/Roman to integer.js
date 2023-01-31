let roman = "MCMXLIX"
//mdmlciv

function romanToInteger(input){
    let sum = 0;
    let realInput = input.toUpperCase().split("");
    const inputLength = realInput.length - 1;

    for (let i = inputLength; i <= inputLength && i > -1; i--) {

        //5, 4  and 1
        if (realInput[i] == "V" && realInput[i - 1] !== "I"){
            sum += 5;
        } else if (realInput[i] == "V" && realInput[i - 1] == "I"){
            sum += 4;
            i--;
        } else if ([i - 1] == "I"){
            sum += 1;
        } 
        //10 and 9
        if (realInput[i] == "X" && realInput[i - 1] !== "I"){
            sum += 10;
        } else if (realInput[i] == "X" && realInput[i - 1] == "I"){
            sum += 9;
            i--;
        }
        //50 and 40
        if (realInput[i] == "L" && realInput[i - 1] !== "X"){
            sum += 50;
        } else if (realInput[i] == "L" && realInput[i - 1] == "X"){
            sum += 40;
            i--;
        }
        //100 and 90
        if (realInput[i] == "C" && realInput[i - 1] !== "X"){
            sum += 100;
        } else if (realInput[i] == "C" && realInput[i - 1] == "X"){
            sum += 90;
            i--;
        }
        //500 and 400
        if (realInput[i] == "D" && realInput[i - 1] !== "C"){
            sum += 500;
        } else if (realInput[i] == "D" && realInput[i - 1] == "C"){
            sum += 400;
            i--; 
        }
        //1,000 and 900
        if (realInput[i] == "M" && realInput[i - 1] !== "C"){
            sum += 1000;
        } else if (realInput[i] == "M" && realInput[i - 1] == "C"){
            sum += 900;
            i--;
        }
    }
    return sum;
}

console.log(romanToInteger(roman));

//------------------------------------------------------------------------------>>>
//Solucion de otra persona//

//la variable s contiene el string en romano

var romanToInt = function(s) {
    
    const symblos = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    }

    let total = 0;

    for(let i =0; i < s.length; i++) {
        let curr = s[i];
        let next = s[i+1];

        if(symbols[curr] < symbols[next]) {
            total -= symbols[curr];
        } else {
            total += symbols[curr];
        }
    } 
    return total;
};