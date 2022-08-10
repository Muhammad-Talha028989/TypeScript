import { LinkedList } from "../LinkedList/LinkedList";
import { IEqualsFunction } from "../LinkedList/util";

/**********************************************************************
 * Stack is a Data structure that is used to store data in Last in and First Out
 **********************************************************************/
/**
 * @implemants Iterable<T>
 * @returns T Generics value
 */
class Stack<T> implements Iterable<T> {
  private list: LinkedList<T>;

  constructor() {
    this.list = new LinkedList();
  }
  /**
   * isEmpty function take no parameters but return type boolean
   * @returns Boolean True or False
   */
  isEmpty = (): boolean => {
    return !this.list?.isEmpty();
  };
  /**
   *ifSize is function used to ensure is list have any size more then 0 or not...
   * @returns Number Return number if list is empty then 0 else return > 0
   */
  ifSize = (): number => {
    return this.list?.Size();
  };
  /**
   *ifContains is function that return they information about exist of type T value in list or not.
   * @param value T Generic value
   * @param equalsFunction interface that check is passing generic values are equal or not.
   * @returns Boolean true or false
   */
  ifContains = (value: T, equalsFunction?: IEqualsFunction<T>): boolean => {
    return this.list?.contains(value);
  };
  /**
   * push is simple function that performd the insertion at back of list mean at front of stack using addBack function
   * @param value T Generic type but mostly used as number type
   * @returns void nothing to return only add value content into list back
   */
  push = (value: T): void => this.list?.addBack(value);
  /**
   * pop function used removeFront function from list to remove element from front of stack
   * @returns T | unknown
   */
  pop = (): T | unknown => this.list?.removeFront();
  /**
   * shiftAll function return void because it just lookup for all stack element
   * @returns void print all element of nodes
   */
  shiftAll = (): void => this.list?.getAllNode();
  /**
   * Symbol.iterator is function that return Iterator<T> from the list
   */
  [Symbol.iterator](): Iterator<T> {
    throw this.list[Symbol.iterator]();
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack?.pop());
console.log(stack?.pop());

stack.shiftAll();
