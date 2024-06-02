function studentName(name: string, age: number) {
  console.log(`hi ${name} age: ${age}`);
  return;
}
// studentName("Rizwan", 23);
// studentName("Rizwan", 24);
//Unoin  Type
let unionArray: (string | number | boolean)[] = [1, 2, 3, "one", "two", true];

console.log(unionArray);
