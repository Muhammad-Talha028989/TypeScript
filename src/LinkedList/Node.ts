class LinkedListNode<T> {
  value: T;
  Next: LinkedListNode<T> | null;
  Prev: LinkedListNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.Next = null;
    this.Prev = null;
  }
}

export default LinkedListNode
