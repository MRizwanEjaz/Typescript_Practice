var myArray = [1, 2, 3, 4, 5, 6];
var doubledArray = myArray.map(function (num) {
    return num * 2;
});
// console.log(doubledArray);
console.log(myArray.map(function (num) {
    return num * 2;
}));
myArray.push(4);
console.log(myArray);
myArray[2] = 23;
console.log(myArray);
myArray.sort();
console.log(myArray);
myArray.reverse();
console.log(myArray);
