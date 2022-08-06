import LinkedListNode from "./Node";
interface Lists<T> {
  head: LinkedListNode<T>;
  tail: LinkedListNode<T>;
  size: number;
}

export default Lists;
