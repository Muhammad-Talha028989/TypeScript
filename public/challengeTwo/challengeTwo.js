function decodedValue(array) {
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
    const ignoringThird = 2;
    const initialValue = 0;
    let dValue = "";
    for (let index = initialValue; index <= ignoringThird; index++) {
        const element = array[index];
        if (index <= 1) {
            Object.getOwnPropertyNames(bandColor).forEach(function (band) {
                if (element.toLowerCase() === band.toLowerCase()) {
                    dValue = dValue + bandColor[band.toString()];
                }
            });
        }
    }
    const thridElement = array[2];
    const store = counting[bandColor[thridElement]];
    dValue = `${dValue + store}Ohms`;
    return dValue;
}
const resultTwo = decodedValue(["White", "Red", "Black"]);
console.log(resultTwo);
//# sourceMappingURL=challengeTwo.js.map