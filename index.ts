const myArray: number[] = [1, 2, 3, 4, 5, 6];

const doubledArray: number[] = myArray.map((num: number) => {
  return num * 2;
});
// console.log(doubledArray);
console.log(
  myArray.map((num: number) => {
    return num * 2;
  })
);
myArray.push(4);
console.log(myArray);
myArray[2] = 23;
console.log(myArray);
myArray.sort();
console.log(myArray);
myArray.reverse();
console.log(myArray);
