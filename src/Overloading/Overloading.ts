export {};
interface IObjectN {
  num: number;
  num1: number;
}

function location(objLocation?: { X: number; Y: number }): object;
function location(objLocation?: object, x?: number, y?: number): object {
  if (typeof objLocation === "object") {
    let newLocation = {
      x: objLocation["X"],
      y: objLocation["Y"],
    };
    return newLocation;
  } else {
    return {
      x: x,
      y: y,
    };
  }
}

// console.log(location({ X: 100, Y: 200 }));

const sumCord = (x: number, y: number, callback?: Function): object => {
  // let store: any = callback();
  let newCord: object = {
    // x: store?.X + x,
    // y: store?.Y + y,
  };
  return newCord;
};
sumCord(2, 3);
