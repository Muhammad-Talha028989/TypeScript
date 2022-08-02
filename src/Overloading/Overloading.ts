export {};
interface IObjectN {
  num: number;
  num1: number;
}

type sumReturn = object | number;

// function sum(obj: sumReturn): sumReturn {
//   let _sum: object = {
//     _sum_: obj["num"] + obj["num1"],
//   };
//   return _sum;
// }

function sum(num: sumReturn, num1?: sumReturn): sumReturn {
  return typeof num === "number" && typeof num1 === "number"
    ? num + num1
    : typeof num === "object"
    ? { _sum_: num["num"] + num["num1"] }
    : null;
}
console.info(sum(2, {}));
console.log(typeof sum({ num: 2, num1: 3 }));
