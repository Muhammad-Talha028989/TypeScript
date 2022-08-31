// /**
//  * Typescript Utility Types
//  */

// // Partial types
// interface student {
//   name: string;
//   rollno: string;
// }

// const getStudent = (Students: student, optional: Partial<student>) => ({
//   ...Students,
//   ...optional,
// });

// let st: student = {
//   name: "Muhammad Talha",
//   rollno: "112/028989",
// };

// const st2 = getStudent(st, {});

// console.info(st2);
let _startProcessTime: number = Number(new Date().getTime().toFixed(3));

console.info(`Process Start ${0} ms`);

for (let index = 0; index < 15; index++) {
  let sum: number = index + 1;
  let _ProcessTimeEnd: number = Number(new Date().getTime().toFixed(3));

  let _overlapsTime: number = parseFloat(
    String(_ProcessTimeEnd / _startProcessTime),
  );
  console.info(`overtime ${_overlapsTime} ms`);
}

let _endProcessTime: number = Number(new Date().getTime().toFixed(3));

let _overAllTime: number = _endProcessTime - _startProcessTime;

console.info(`Process End ${_overAllTime} ms`);
