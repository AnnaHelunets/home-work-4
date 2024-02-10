const arr1 = [2200, 34000, 1200];
const arr2 = [120000, 34000, 7000];
const arr3 = [1100, 56000, 2700];

const allArrays = arr1.concat(arr2, arr3);
console.log(allArrays);

let smallestNumber = allArrays[0];
let biggestNumber = allArrays[0];

for (const value of allArrays) {
  if (value < smallestNumber) {
    smallestNumber = value;
  }
}
console.log(smallestNumber);

for (const value of allArrays) {
  if (value > biggestNumber) {
    biggestNumber = value;
  }
}
console.log(biggestNumber);
