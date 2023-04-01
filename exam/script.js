const originalArray = [1, 6, 2, 7, 3, 8, 4, 9, 5, 10];

const newArray = originalArray.map((value) => {
  if (value <= 5) {
    return value + 10;
  } else {
    return value;
  }
});

console.log(newArray);
// 