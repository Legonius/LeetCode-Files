// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// Method 1 worked
// const map = new Map();

// let roman = ["I", "V", "X", "L", "C", "D", "M"];
// let number = [1, 5, 10, 50, 100, 500, 1000];

// for (let i = 0; i < roman.length; i++) {
//   map.set(roman[i], number[i]);
// }

// const exchanger = (s) => {
//   let arr = s.split("");
//   arr = arr.map((x) => map.get(x));
//   arr.reverse();
//   let int = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] >= arr[i - 1]) {
//       int += arr[i];
//     } else {
//       int -= arr[i];
//     }
//   }
//   console.log(int);
//   return int;
// };
// exchanger("LVIII");

// Method 2
// Result Better than Method 1 ,beat 95%

const exchanger = (s) => {
  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let arr = s.split("");
  arr.reverse();
  let int = roman[arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (roman[arr[i]] >= roman[arr[i - 1]]) {
      int += roman[arr[i]];
    } else {
      int -= roman[arr[i]];
    }
  }

  console.log(int);
  return int;
};
exchanger("LVIII");
