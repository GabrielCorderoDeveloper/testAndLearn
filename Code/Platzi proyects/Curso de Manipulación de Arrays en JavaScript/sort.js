const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);

const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a,b) => a - b);
console.log(numbers);

const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];
words.sort((a,b) => a.localeCompare(b));
console.log(words);

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];
orders.sort((a,b) => b.total - a.total);
console.log(orders);

const months2 = ['Febrero', 'Julio', "fsdf", 'Diciembre', 'Enero'];
function monthValue(month) {
    switch (month.toUpperCase()) {
        case 'ENERO':
            return 1;
        case 'FEBRERO':
            return 2;
        case 'MARZO':
            return 3;
        case 'ABRIL':
            return 4;
        case 'MAYO':
            return 5;
        case 'JUNIO':
            return 6;
        case 'JULIO':
            return 7;
        case 'AGOSTO':
            return 8;
        case 'SEPTIEMBRE':
            return 9;
        case 'OCTUBRE':
            return 10;
        case 'NOVIEMBRE':
            return 11;
        case 'DICIEMBRE':
            return 12;
        default:
            //Cualquier valor que no coincida se irá de último
            return 13; 
    }
}

months2.sort((a, b) => monthValue(a) - monthValue(b))

console.log(months2);