/*Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

The algorithm for myAtoi(string s) is as follows:

Whitespace: Ignore any leading whitespace (" ").
Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity is neither present.
Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
Return the integer as the final result.

 

Example 1:

Input: s = "42"

Output: 42

Explanation:

The underlined characters are what is read in and the caret is the current reader position.
Step 1: "42" (no characters read because there is no leading whitespace)
         ^
Step 2: "42" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "42" ("42" is read in)
           ^
 */

let case1 = "42";
let case2 = "   -042";
let case3 = "1337c0d3";
let case4 = "0-1";
let case5 = "words and 987";
let case6 = "-91283472332";
let case7 = "+-12";
let case8 = "   +0 123";
let case9 = "  +  413";

var myAtoi = function (s) {
  let result = 0;
  let whiteSpace = false;
  let numMode = false;
  let sign = 1;
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char === " " && numMode) {
      break;
    }
    if (char === " " && !whiteSpace) {
      continue;
    }
    if (char == "+" && !numMode) {
      numMode = true;
      continue;
    }
    if (char == "-" && !numMode) {
      numMode = true;
      sign *= -1;
      continue;
    }
    if (char <= "9" && char >= "0") {
      whiteSpace = true;
      numMode = true;
      result = result * 10 + char * 1;
      continue;
    }
    if (isNaN(Number(char))) {
      break;
    }
  }
  result *= sign;
  console.log(Math.min(Math.max(-(2 ** 31), result), 2 ** 32 - 1));
};

myAtoi(case1);
myAtoi(case2);
myAtoi(case3);
myAtoi(case4);
myAtoi(case5);
myAtoi(case6);
myAtoi(case7);
myAtoi(case8);
myAtoi(case9);
