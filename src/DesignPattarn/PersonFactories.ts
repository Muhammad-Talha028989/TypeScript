//? Person Factories class
import { IPerson } from "./IPerson";
import { NaturalPerson } from "./NaturalPerson";
import { LegalPerson } from "./LegalPerson";
export class PersonFactories {
  public static createPerson = (Categories: String): IPerson => {
    switch (Categories) {
      case "N":
        return new NaturalPerson();
        break;
      case "L":
        return new LegalPerson();
        break;

      default:
        return null as unknown as IPerson;
        break;
    }
  };
}
