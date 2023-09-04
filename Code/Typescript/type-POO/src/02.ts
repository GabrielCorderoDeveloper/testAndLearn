class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month:number, day:number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  prinFormat(): string {
    return `${this.day}/${this.month}/${this.year}`;
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

    //1? Fixing months and days
    if (this.day > 31) {
      this.day -= 30;
      this.month += 1;
    }
    if (this.month > 11) {
      this.month -= 12;
      this.year += 1;
    }
  }
}

const myDate = new MyDate(1993, 11, 30);
console.log(myDate.prinFormat());

// myDate.add(3, 'days')
// console.log(myDate.prinFormat());

myDate.add(3, 'months')
console.log(myDate.prinFormat());



