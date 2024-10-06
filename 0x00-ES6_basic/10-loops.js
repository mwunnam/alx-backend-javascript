export default function appendToEachArrayValue(array, appendString) {
  const newArray = [...array];
  let idx = 0;

  for (const value of newArray) {
    newArray[idx] = appendString + value;
    idx += 1;
  }

  return newArray;
}
