/**
 * Typescript Utility Types
 */

// Partial types
interface student {
  name: string;
  rollno: string;
}

const getStudent = (Students: student, optional: Partial<student>) => ({
  ...Students,
  ...optional,
});

let st: student = {
  name: "Muhammad Talha",
  rollno: "112/028989",
};

const st2 = getStudent(st,{});

console.info(st2);
