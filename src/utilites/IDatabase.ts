export interface IDatabase<T extends IBaseID> {
  set(newValue: T): void;
  get(ID: string): T | undefined;
}
