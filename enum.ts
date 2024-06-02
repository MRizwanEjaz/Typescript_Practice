//group of constants value or named constants value
enum days {
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
}
enum months {
  jan,
  feb,
  march,
  apr,
  may,
  june,
  july,
  aug,
  sep,
  oct,
  nov,
  dec,
}
function enumFuction(value: days) {
  switch (value) {
    case days.monday:
      console.log("first day of the week");
      break;
    case days.tuesday:
      console.log("second day of the week");
      break;
    default:
      console.log("invalid day");
  }
}
enumFuction(days.tuesday);

enum orderStatus {
  deleliverd,
  pending,
  dispatch,
}

let order: { title: string; price: number; status: orderStatus; date: Date };

order = {
  title: "Iphone",
  price: 150000,
  status: orderStatus.pending,
  date: new Date(),
};
console.log(order);
