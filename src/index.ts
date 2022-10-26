export {};
/**
 * Swaps is the function that help to swap array index and their values...
 * @param array Array of numbers
 * @param index Array index of value that tend to small then minIndex for swap
 * @param minIndex Array index of suppose min value index
 */
const Swaps = (array: number[], index: number, minIndex: number) => {
  [array[index], array[minIndex]] = [array[minIndex], array[index]];
};
/**
 * Selection Sort is the algorithms used to sorting the linear data structure...
 * @param array Take unsort array of number of any length
 * @returns Returns the array after sorting
 */
const selectionSort: (array: number[]) => number[] = (
  array: number[],
): number[] => {
  let arr = array.slice();
  for (let index: number = 0; index < arr.length - 1; index++) {
    let minIndex: number = index;
    for (
      let innerIndex: number = index + 1;
      innerIndex < arr.length;
      innerIndex++
    ) {
      if (arr[innerIndex] < arr[minIndex]) {
        minIndex = innerIndex;
      }
    }
    Swaps(arr, index, minIndex);
  }
  return arr;
};

console.info(selectionSort([2, 3, 1, 4, 5, 6, 7, 9, 8]));
