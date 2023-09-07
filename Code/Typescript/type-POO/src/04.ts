export class MyDate {
  public year: number;
  public month: number;
  public day: number;

  constructor(year: number, month:number, day:number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

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
}

const myDate = new MyDate(1993, 11, 30);

