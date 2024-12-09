// 20. Valid Parentheses
// Easy
// Topics
// Companies
// Hint
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

var isValid = function (s) {
  if (s.length % 2 !== 0) return false;
  const paranthesis = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (paranthesis[s[i]]) {
      stack.push(s[i]);
      continue;
    }
    if (paranthesis[stack[stack.length - 1]] !== s[i]) {
      return false;
    }
    stack.pop();
  }
  if (stack.length === 0) {
    return true;
  } else return false;
};

console.log(isValid("()[]{}"));
console.log(isValid("([])"));
console.log(isValid("({([]){()}})"));
console.log(isValid("(]"));
