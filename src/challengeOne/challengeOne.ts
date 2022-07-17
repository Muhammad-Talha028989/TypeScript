// find the resistance of the resistors

function decodedValue1(array: Iterable<string[2]>): string {
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
  const ignoringThird: number = 1;
  const initialValue: number = 0;
  let dValue: string = "";
  for (let index = initialValue; index <= ignoringThird; index++) {
    const element: string = array[index];

    Object.getOwnPropertyNames(bandColor).forEach(function (band) {
      if (element.toLowerCase() === band.toLowerCase()) {
        dValue = dValue + bandColor[band.toString()];
      }
    });
  }
  return dValue;
}

const result: string = decodedValue1(["white", "red", "white"]);
console.log(result);
