import {IDatabase} from "./IDatabase"
export class InMemoryDatabase<T> implements IDatabase<T | any> {
  private db: Record<string, T> = {};
  public set(newValue: T | any): void {
    this.db[newValue.ID] = newValue;
  }
  public get(ID: string): T | undefined {
    return this.db[ID];
  }
}
