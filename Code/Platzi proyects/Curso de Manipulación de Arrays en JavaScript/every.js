const numbers = [1,30,39,29,10,13];

let rta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40){
        rta = false;
    }
}
//console.log("for", rta);


//The same thing withing a line
const rta2 = numbers.every(item => item <= 40);
//console.log("rta 2", rta2)


//Cheching if all of the team members are bolow 15
const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 13,
    },
  ];


const rta3 = team.every(item => item.age <= 15);
console.log("Under 15", rta3)
