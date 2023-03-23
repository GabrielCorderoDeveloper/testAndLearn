//^ Basic types ----------------------------------->>>
let id: number = 5;
let company: string = 'Traversy Media';
let isPlublished: boolean = true;
let x: any = 'Hello'

let ids: number[] = [1,2,3,4,5];
let arr: any[] = [1, true, 'Hello'];

//~ Tuple -------------------------->>>
let person: [number, string, boolean] = [7,'Hi',false];
//~ Tuple Array -------------------->>>
let employee: [number, string][]

employee = [
    [1,'Jhon'],
    [2,'Karen'],
    [3,'George'],
];

//~ Union -------------------------->>>
let pid: string | number; 
pid= 22;

//~ Enum --------------------------->>>
enum Direction1 {
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4,
}
enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}

console.log(Direction1.Left);
console.log(Direction2.Left);

//~ Objects ------------------------->>>
type User = {
    id: number;
    name:string;
}

const myUser: User = {
    id: 407,
    name: 'Fjc_2004',
}

//~ Type Assertion ------------------>>>
let cid: any = 1;
let custumerId = cid as number;
///let custumerId = <number>cid
console.log(custumerId);

//~ Functions  ---------------------->>>
function addNum(x: number, y: number): number {
    return x + y;
}
console.log(addNum(3,7));
///Void type
function log(message: string | number): void {
    console.log(message);
}
log('Hola Type ' + 44);

//~ Interfaces  --------------------->>>
interface UserInterface {
    readonly id: number;
    name: string;
    age?: number;
}
///Interfaces are for objects
const user1: UserInterface = {
    id: 1,
    name: 'Jhon',
}

interface MathFunc {
    (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

//~ Clases ------------------------->>>
class Person implements PersonInterface{
    id: number;
    name: string;
    ///The constructor executes each time the class is used
    constructor(id: number, name: string ) {
        this.id = id;
        this.name = name;
    }

    register() {
        return `${this.name} is now registered`
    }
}
const brad = new Person(1,'Brad');
const mike = new Person(2,'Mike');

console.log(brad.register());

interface PersonInterface {
     id: number;
    name: string;
    register(): string;
}

//~ Generics ----------------------->>>
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4,]);
let strArray = getArray<string>(['Brad', 'Jhon', 'Jill']);

numArray.push(1);