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

function processValue(value: string | number): number {
  if (typeof value == "number") return value * 2;
  else return value.length;
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) return null;
  const highest = Math.max(...products.map((p) => p.price));
  return products.filter((p) => p.price === highest)[0] || null;
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day == Day.Saturday || day == Day.Sunday) return "Weekend";
  else return "Weekday";
}

async function squareAsync(n: number): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) reject(new Error(" Negative number not allowed"));
      else resolve(n * n);
    }, 1000);
  });
}


