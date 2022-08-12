type combinerType = string | number;

export class Combiner {
  public param: combinerType;

  public param1: combinerType;

  constructor(param?: combinerType, param1?: combinerType) {
    this.param = param;
    this.param1 = param1;
  }
  public combiners = (): combinerType => {
    return this.param + " " + this.param1;
  };
  public adds = (num: number, num1: number): combinerType => {
    this.param = num;
    this.param1 = num1;
    return this.param + this.param1;
  };
}
