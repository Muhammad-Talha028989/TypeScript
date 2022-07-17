export {};

function Component(options: { id: number; name: string }) {
  return (target: Function & typeof help) => {
    target.prototype.id = options.id;
    target.prototype.name = options.name;
  };
}

@Component({
  id: 100,
  name: "Muhammad Talha",
})
export class help {
  id!: number;
  name!: string;
}

console.log([new help().id, new help().name]);
