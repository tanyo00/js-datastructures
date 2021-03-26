// set is a collection of data with unique values

const set = new Set();

set.add("item1");
set.add("item1");
set.add("item2");
set.add("item2");

// forEach loop
// We cannot use duplicated values
set.forEach((item) => console.log(item));

// set is also used to filter duplicated values from an array
let arr = [1, 1, 1, 1, 2, 2, 2];

let clearDuplicates = new Set(arr);
console.log(clearDuplicates);
