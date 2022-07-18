var nueros = 100;
var disponible = false;

for (var i = 1; i <= 100 ; i++){
    disponible = false;
 if(i % 3 == 0){
    document.write("Fizz")
    disponible = true;
 }
 if(i % 5 == 0){
    document.write("Buzz")
    disponible = true;
 }
 if (!disponible){
    document.write(i)
 }
 document.write("<br>")
}