function seek<X>(x: X) {
  return x;
}
type zipBluePrint = {
  [key: string]: any;
};
const zip: zipBluePrint = {};

const _seek = seek(
  Object.defineProperty(zip, "Name", {
    value: 2,
    writable: false,
  }),
);

console.log(_seek.Name);
