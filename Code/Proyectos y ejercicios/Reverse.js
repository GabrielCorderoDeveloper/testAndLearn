function rev(input)
{
let string = input
string = string.split("")
let result = string.reverse()
result = result.join("")
console.log(result)
}

rev("Gabriel")


/* Esta es otra forma de hacerlo
function rev(input)
{
return input.split("").reverse().join("");
}
input = "hola"
console.log( rev(input) )
*/