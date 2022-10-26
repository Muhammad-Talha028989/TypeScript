export {};
const Swaps = (array: number[], index: number, minIndex: number) => {
  const temp: number = array[index];
  array[index] = array[minIndex];
  array[minIndex] = temp;
};
/**
 * Selection Sort is the algorithms used to sorting the linear data structure...
 * @param array Take unsort array of number of any length
 * @returns Returns the array after sorting
 */
const selectionSort: (array: number[]) => number[] = (
  array: number[],
): number[] => {
  for (let index: number = 0; index < array.length - 1; index++) {
    let minIndex: number = index;
    for (
      let innerIndex: number = index + 1;
      innerIndex < array.length;
      innerIndex++
    ) {
      if (array[innerIndex] < array[minIndex]) {
        minIndex = innerIndex;
      }
    }
    Swaps(array, index, minIndex);
  }
  return array;
};

console.info(selectionSort([2, 3, 1, 4, 5, 6, 7, 9, 8]));
