function cipherRot3(str) {
  str = str.toUpperCase();
  return str.replace(/[A-Z]/g, rot3);

  function rot3(correspondance) {
    const charCode = correspondance.toUpperCase().charCodeAt();
    //A = 65, Z = 90
    return String.fromCharCode(
      charCode + 3 <= 90 ? charCode + 3 : ((charCode + 3) % 90) + 64,
    );
  }
}

let result = cipherRot3("muhammadtalha");
console.log(result);
