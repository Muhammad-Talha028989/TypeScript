//? find the resistance of the resistors

function decodedValue(array: Iterable<string>): string {
  const bandColor = {
    Black: 0,
    Brown: 1,
    Red: 2,
    Orange: 3,
    Yellow: 4,
    Green: 5,
    Blue: 6,
    Violet: 7,
    Grey: 8,
    White: 9,
  };
  const counting = {
    0: "da",
    1: "h",
    2: "kilo",
    3: "TenKilo",
    4: "oneHundredKilo",
    5: "M",
    6: "TenM",
    7: "oneHundredM",
    8: "G",
    9: "TenG",
  };
  const ignoringThird: number = 2;
  const initialValue: number = 0;
  let dValue: string = "";
  for (let index = initialValue; index <= ignoringThird; index++) {
    const element: string = array[index];
    if (index <= 1) {
      Object.getOwnPropertyNames(bandColor).forEach(function (band) {
        if (element.toLowerCase() === band.toLowerCase()) {
          dValue = dValue + bandColor[band.toString()];
        }
      });
    }
  }
  const thridElement: string = array[2];
  const store: string = counting[bandColor[thridElement]];
  dValue = `${dValue + store}Ohms`;
  return dValue;
}

const resultTwo: string = decodedValue(["White", "Red", "Black"]);
console.log(resultTwo);
