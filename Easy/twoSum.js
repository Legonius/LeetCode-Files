let nums = [3, 2, 3];
let target = 6;

var twoSum = function (nums, target) {
  let lastIdx = 1;
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let y = lastIdx; y < nums.length; y++) {
      let sum = nums[i] + nums[y];
      console.log(i, y, sum);

      if (sum == target) {
        arr.push(i, y);
        console.log(arr);
        return arr;
      }
    }
    lastIdx++;
  }
};
twoSum(nums, target);
