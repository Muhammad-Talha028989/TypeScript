import { IPerson } from "./IPerson";

export class LegalPerson implements IPerson {
  Name: String;
  Categories: String;
  constructor() {
    this.Name = "Muhammad Talha";
    this.Categories = "Legal Person";
  }
  printIPerson(): void {
    console.info(`${this.Name} is a ${this.Categories}`);
  }
}
