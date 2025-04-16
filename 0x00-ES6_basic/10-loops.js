export default function appendToEachArrayValue(array, appendString) {
  const Array_new = [];
  for (const value of array) {
    Array_new.push(appendString + value);
  }

  return Array_new;
};
