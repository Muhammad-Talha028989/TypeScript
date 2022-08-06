import LinkedListNode from "./Node";
import Lists from "./List";

import {
  EMPTY_ERROR,
  OUT_OF_BOUND_ERROR,
  VALUE_DOES_NOT_EXIST_ERROR,
  IEqualsFunction,
  defaultEquals,
} from "./util";

class LinkedList<T extends any> implements Iterable<T> {
  private list: Lists<T> | undefined;

  constructor() {
    this.list = undefined;
  }

  Size(): number {
    if (this.list) return this.list.size;
    return 0;
  }
  isEmpty(): boolean {
    return !this.list;
  }

  /**
   * Insertion Method
   * return : void
   */
  addFront(Val: T): void {
    const newNode = new LinkedListNode(Val);
    if (this.list) {
      this.list.head.Prev = newNode;
      newNode.Next = this.list.head;
      this.list.head = newNode;
      this.list.size += 1;
    } else {
      this.list = {
        head: newNode,
        tail: newNode,
        size: 1,
      };
    }
  }

  addBack(Val: T): void {
    const newNode = new LinkedListNode(Val);

    if (this.list) {
      this.list.tail.Next = newNode;
      newNode.Prev = this.list.tail;

      this.list.tail = newNode;
      this.list.size += 1;
    } else {
      this.list = {
        head: newNode,
        tail: newNode,
        size: 1,
      };
    }
  }

  addAt(index: number, Val: T): boolean {
    if (index === 0) {
      this.addFront(Val);
      return true;
    }

    if (index === this.Size()) {
      this.addBack(Val);
      return true;
    }

    if (index < 0 || index >= this.Size() || !this.list) {
      throw new Error(OUT_OF_BOUND_ERROR);
    }

    let cur: LinkedListNode<T> = this.list.head;
    for (let i = 0; i < index - 1; i++) {
      cur = cur.Next!;
    }
    const newNode = new LinkedListNode(Val);

    cur.Next!.Prev = newNode;
    newNode.Next = cur.Next;

    newNode.Prev = cur;
    cur.Next = newNode;
    this.list.size += 1;

    return true;
  }

  peekFront(): T {
    if (!this.list) throw new Error(EMPTY_ERROR);
    return this.list.head.value;
  }

  peekBack(): T {
    if (!this.list) throw new Error(EMPTY_ERROR);
    return this.list.tail.value;
  }

  get(index: number): T {
    if (index < 0 || index >= this.Size() || !this.list)
      throw new Error(OUT_OF_BOUND_ERROR);
    let loops: number = 0;
    let cur: LinkedListNode<T> = this.list.head;
    while (loops < index) {
      cur = cur.Next!;
      loops++;
    }
    return cur.value;
  }

  indexOf(value: T, equalsFunction?: IEqualsFunction<T>): number {
    if (!this.list) return -1;
    const equalsF: IEqualsFunction<T> | boolean =
      equalsFunction || defaultEquals;

    let loops = 0;
    let cur = this.list.head;

    while (!equalsF(cur.value, value)) {
      cur = cur.Next!;
      loops += 1;
    }
    return loops;
  }

  contains(value: T, equalsFunction?: IEqualsFunction<T>): boolean {
    let index: number = this.indexOf(
      value,
      equalsFunction ? equalsFunction : undefined,
    );
    return index !== -1;
  }

  removeFront(): T {
    if (!this.list) throw new Error(EMPTY_ERROR);

    let cur: LinkedListNode<T> = this.list.head;

    if (this.list.head.Next) {
      this.list.head.Next.Prev = null;
      this.list.head = this.list.head.Next;

      this.list.size -= 1;
    } else {
      this.list = undefined;
    }
    return cur.value;
  }

  removeBack(): T {
    if (!this.list) throw new Error(EMPTY_ERROR);

    let cur: LinkedListNode<T> = this.list.head;

    if (this.list.tail.Prev) {
      this.list.tail.Prev.Next = null;
      this.list.tail = this.list.tail.Prev;

      this.list.size -= 1;
    } else {
      this.list = undefined;
    }
    return cur.value;
  }

  remove(value: T): T {
    const index: number = this.indexOf(value);

    if (index === -1) throw new Error(VALUE_DOES_NOT_EXIST_ERROR);

    return this.removeAt(index);
  }

  removeAt(index: number): T {
    if (index === 0) {
      return this.removeFront();
    }

    if (index === this.Size() - 1) {
      return this.removeBack();
    }

    if (index < 0 || index >= this.Size() || !this.list)
      throw new Error(EMPTY_ERROR);

    let loops: number = 0;

    let cur: LinkedListNode<T> = this.list.head;

    while (loops < index) {
      cur = cur.Next!;
      loops += 1;
    }

    cur.Next!.Prev = cur.Prev;
    cur.Prev!.Next = cur.Next;

    this.list.size -= 1;
    return cur.value;
  }

  clear(): void {
    this.list = undefined;
  }
  [Symbol.iterator](): Iterator<T> {
    if (!this.list) return;

    let cur: LinkedListNode<T> | null;

    for (cur = this.list.head; cur !== null; cur = cur.Next) {
      throw cur.value;
    }
  }
}



