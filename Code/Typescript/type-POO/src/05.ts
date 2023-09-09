export class MyDate {

  constructor(
    public year: number = 1993,
    public month: number = 7,
    public day: number = 9
    ) {}

  prinFormat(): string {
    const day = this.addPading(this.day);
    return `${this.day}/${this.month}/${this.year}`;
  }

  private addPading(value: number) {
    if (value <= 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  getDay() {
    return this.day;
  }
}

const myDate = new MyDate(1993, 7, 10);
console.log(myDate.prinFormat());
console.log(myDate.getDay());


const myDate2 = new MyDate();
console.log(myDate2.prinFormat());
