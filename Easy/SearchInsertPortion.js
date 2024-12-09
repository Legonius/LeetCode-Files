// Input: nums = [1,3,5,6], target = 5
// Output: 2

let num = [1, 3, 5, 6];
let tget = 7;
var searchInsert = function (nums, target) {
  let result = nums.length;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      result = i;
      console.log("f", result);
      return result;
    } else if (nums[i] > target) {
      result = i;
      console.log("s", result);
      return result;
    }
  }
  console.log(result);
  return result;
};

searchInsert(num, tget);

// Shorter Method
/*
var searchInsert = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      return i
    }else if (nums[i] > target) {
      return i}}
  return nums.length;
}*/
