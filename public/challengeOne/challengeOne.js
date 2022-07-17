function decodedValue1(array) {
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
    const ignoringThird = 1;
    const initialValue = 0;
    let dValue = "";
    for (let index = initialValue; index <= ignoringThird; index++) {
        const element = array[index];
        Object.getOwnPropertyNames(bandColor).forEach(function (band) {
            if (element.toLowerCase() === band.toLowerCase()) {
                dValue = dValue + bandColor[band.toString()];
            }
        });
    }
    return dValue;
}
const result = decodedValue1(["white", "red", "white"]);
console.log(result);
//# sourceMappingURL=challengeOne.js.map