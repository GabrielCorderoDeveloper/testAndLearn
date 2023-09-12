export class MyDate {

  constructor(
    public year: number = 1993,
    private _month: number = 7,
    private _day: number = 9
    ) {}

  prinFormat(): string {
    const day = this.addPading(this._day);
    return `${this._day}/${this._month}/${this.year}`;
  }

  private addPading(value: number) {
    if (value <= 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this._month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  get day() {
    return this._day;
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  get month() {
    return this._month;
  }

  set month(newValue: number) {
    if (newValue >= 1 && newValue <= 12) {
      this._month = newValue;
    } else {
      throw new Error('month out of range');
    }

  }
}

const myDate = new MyDate(1993, 7, 10);
console.log(myDate.prinFormat());

myDate.month = 9;
console.log(myDate.month);
