export class Animal {
  constructor(public name: string) {

  }

  move() {
    console.log('Moving along!')
  }

  greeting() {
    return `Hello, I'm ${this.name}`
  }
}

export class Dog extends Animal {

  constructor(
    name: string,
    public owner: string,
  ) {
    super(name);
  }

  woof(times: number):void {
    for (let index = 0; index < times; index++) {
      console.log("Woooffff!!!!")
    }
  }

}

const fifi = new Animal('fifi');
fifi.move();
console.log(fifi.greeting());

const jake = new Dog('jake', 'nico');
jake.move();
jake.woof(5);
console.log(jake.greeting());
