var plusOne = function (digits) {
  let str = digits.join("");
  str = BigInt(str);
  str++;
  str = String(str).split("");
  str = str.map((x) => Number(x));
  console.log(str);

  return str;
}; // over 16 char not work ,Must use BigInt instead of Number
//reason;In JavaScript, numbers are stored in 64-bit floating-point format (also known as "double precision"), which limits the precision to about 16 significant digits. Once you go beyond that, JavaScript may round or incorrectly represent the number. This limitation is due to how numbers are stored in memory and is inherent to JavaScript's handling of large numbers.

plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]);
