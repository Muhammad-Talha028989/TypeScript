export {};

// Quick sorting using typescript

const QuickSorting = (array: Array<number>): Array<number> => {
  if (array?.length === 1) {
    return array;
  }

  let pivot: number = array[array.length - 1];
  let leftArray: Array<number> = Array<number>();
  let rightArray: Array<number> = Array<number>();

  for (let index = 0; index < array.length - 1; index++) {
    leftArray = array.filter((items) => items < pivot);
    rightArray = array.filter((items) => items > pivot);
  }
  if (leftArray?.length > 0 && rightArray?.length > 0) {
    return Array<number>(
      ...QuickSorting(leftArray),
      pivot,
      ...QuickSorting(rightArray),
    );
  } else if (leftArray?.length > 0) {
    return Array<number>(...QuickSorting(leftArray), pivot);
  } else {
    return Array<number>(pivot, ...QuickSorting(rightArray));
  }
};

let array: Array<number> = QuickSorting([2, 1, 4, 6, 5, 7, 9, 8, 3]);
console.info(array);
