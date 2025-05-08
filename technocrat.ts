function formatString(input: string, toUpper: boolean = true): string {
  return toUpper ? input.toLocaleUpperCase() : input.toLocaleLowerCase();
}

interface Item {
  title: string;
  rating: number;
}
function filterByRating(items: Item[]): Item[] {
  return items.filter((item) => item.rating >= 4.0);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  let newArray: T[] = [];
  arrays.forEach((array) => newArray.push(...array));
  return newArray;
}

class Vehicle {
  private make: string;
  private year: number;
  constructor(brandName: string, year: number) {
    this.make = brandName;
    this.year = year;
  }
  getInfo() {
    return `Make ${this.make}, Year ${this.year}`;
  }
}
class Car extends Vehicle {
  private model: string;
  constructor(brandName: string, year: number, model: string) {
    super(brandName, year);
    this.model = model;
  }
  getModel() {
    return `Model: ${this.model}`;
  }
}