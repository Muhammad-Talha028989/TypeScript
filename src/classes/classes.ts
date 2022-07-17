//? Abstract classes using typescript.

abstract class Car {
  abstract getCarName(): string;
  printCar = (): void => {
    console.log("Best car is " + this.getCarName());
  };
}


class Honda extends Car {
  hondaCarName: string;
  constructor(carName: string) {
    super();
    this.hondaCarName = carName;
  }
  getCarName(): string {
    return this.hondaCarName;
  }
}

let honda = new Honda("Honda corol");
honda.printCar();

//? Basic of classes in Typescript.
/*class NodeTree {
  value: number = 0;
    nextLink: NodeTree = null;

  public constructor(value: number|undefined, link: NodeTree|undefined) {
    this.value = value;
    this.nextLink = link;
  }
  public NodeTree = (
    Value: number,
    link: NodeTree, //* Sorry not constructer but settter.
  ) => {
    this.value = Value;
    this.nextLink = link;
  };

  printNodeTree = () =>
    //* Custome method to print class value.
    {
      console.log([this.value,this.nextLink?.value]);
    };
}

const node = new NodeTree(1,new NodeTree(2,null)); //? called the defualt constructer....
// node.NodeTree( 1, null );
node.printNodeTree()

//?*/
