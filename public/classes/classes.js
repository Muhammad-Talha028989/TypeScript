class Car {
    constructor() {
        this.printCar = () => {
            console.log("Best car is " + this.getCarName());
        };
    }
}
class Honda extends Car {
    constructor(carName) {
        super();
        this.hondaCarName = carName;
    }
    getCarName() {
        return this.hondaCarName;
    }
}
let honda = new Honda("Honda corol");
honda.printCar();
//# sourceMappingURL=classes.js.map