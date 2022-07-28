type MyDataType<T, U> = T extends U ? T : U;

type MyString = Int16Array;
type MyNumber = String;
type newType = MyDataType<MyString, MyNumber>;

type ArrayString<T> = T[] | T;

let newStringArray: ArrayString<Number[]> = [1, 2, 3, 4, 5];

console.info(newStringArray);
