//? Call the Factory in Main class method
import { IPerson } from "./IPerson";
import { PersonFactories } from "./PersonFactories";

export class Main {
  public Main = (): void => {
    const Person: IPerson = PersonFactories.createPerson("L");
    Person.printIPerson();
  };
}

const P = new Main();
P.Main();
