import { IPerson } from "./IPerson";

export class NaturalPerson implements IPerson {
  Name: String;
  Categories: String;
  constructor() {
    this.Name = "Muhammad Talha";
    this.Categories = "Natural Person";
  }
  printIPerson(): void {
    console.info(`${this.Name} is a ${this.Categories}`);
  }
}
