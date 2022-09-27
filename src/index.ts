// Sorting and Filter the array of object

enum Gender {
  Male,
  Female,
}

interface IPerson {
  name: string;
  age: number;
  gender: Gender;
}

const People: IPerson[] = [
  { name: "Muhammad Talha", age: 22, gender: Gender.Male },
  { name: "Muhammad Ahmed", age: 25, gender: Gender.Male },
  { name: "Muhammad Umer", age: 13, gender: Gender.Male },
  { name: "Tuba", age: 17, gender: Gender.Female },
];

const FilterByAge = (People: IPerson[], range: { min: number; max: number }) =>
  People.filter((person) => person.age >= range.min && person.age <= range.max);

let range: { min: number; max: number } = { min: 18, max: 25 };
const filterByAge = FilterByAge(People, range);

console.info(filterByAge);
