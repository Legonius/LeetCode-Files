// 14. Longest Common Prefix
// Easy
// Topics
// Companies
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  let end = 0;
  for (let j = 0; j < strs[0].length; j++) {
    for (let i = 0; i < strs.length; i++) {
      if (strs[i][j] !== strs[0][end]) {
        return strs[0].slice(0, end);
      }
    }
    end++;
  }

  return strs[0].slice(0, end);
};

// longestCommonPrefix(["flower", "flow", "flight"]);
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["aaa", "aa", "aaa"]));
