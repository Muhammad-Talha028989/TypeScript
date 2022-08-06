interface IError {
  EMPTY_ERROR: string | null;
  OUT_OF_BOUND_ERROR: string | null;

  VALUE_DOES_NOT_EXIST_ERROR: string | null;
}

export interface IEqualsFunction<T> {
  (a: T, b: T): boolean;
}

const Errors: IError = {
  EMPTY_ERROR: "LinkedList is empty!",
  OUT_OF_BOUND_ERROR: "LinkedList is OUT OF BOUND Now",
  VALUE_DOES_NOT_EXIST_ERROR: "Value does not exist",
};
export const defaultEquals = <T>(a: T, b: T): boolean => {
  return a === b;
};
export let EMPTY_ERROR: string = Errors.EMPTY_ERROR;
export let OUT_OF_BOUND_ERROR: string = Errors.OUT_OF_BOUND_ERROR;
export let VALUE_DOES_NOT_EXIST_ERROR: string =
  Errors.VALUE_DOES_NOT_EXIST_ERROR;
export default Errors;
