/**
 * Function checks if a set contains each element in an array.
 * @param set - The collection of unique items.
 * @param array - The array of items.
 * @returns {Boolean}
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
