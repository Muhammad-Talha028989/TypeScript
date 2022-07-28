









// let alphabet: string = "muhammadtalha";
// let newalpha: string = "";

// function shift({
//   newalpha = "",
//   keyShitf,
// }: {
//   newalpha: string;
//   keyShitf: number;
// }): string {
//   for (let i: number = 0; i < alphabet.length; i++) {
//     let offset: number = (i + keyShitf) % alphabet.length;
//     return (newalpha += alphabet[offset]);
//   }
// }

// let result: string = shift({ newalpha: alphabet, keyShitf: 3 });
// console.log(result);

// // function encode({ message }: { message: string }): string {
// //   let result: string = "";
// //   message = message.toLowerCase();
// //   for (let i: number = 0; i < message.length; i++) {
// //     let index: number = alphabet.indexOf(message[i]);
// //     result += newalpha[index];
// //   }
// //   return result;
// // }

// // Encrypts text using a shift od s
// // function encrypt(text, s) {
// //   let result = "";
// //   for (let i = 0; i < text.length; i++) {
// //     let char = text[i];
// //     if (char.toUpperCase(text[i])) {
// //       let ch = String.fromCharCode(((char.charCodeAt(0) + s - 65) % 26) + 65);
// //       result += ch;
// //     } else {
// //       let ch = String.fromCharCode(((char.charCodeAt(0) + s - 97) % 26) + 97);
// //       result += ch;
// //     }
// //   }
// //   return result;
// // }
// // let result: string = encrypt("muhammadtalha", 3);
// // console.log(result);
