function seek(x) {
    return x;
}
const zip = {};
const _seek = seek(Object.defineProperty(zip, "Name", {
    value: 2,
    writable: false,
}));
console.log(_seek.Name);
//# sourceMappingURL=Generics.js.map