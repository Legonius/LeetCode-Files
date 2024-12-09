// not valid
// var removeDuplicates = function (nums) {
//   let arr = [];
//   nums.forEach((x) => {
//     if (!arr.includes(x)) {
//       arr.push(x);
//     }
//   });
//   return arr;
// };

var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let i = 1;
  for (let y = 0; y < nums.length; y++) {
    if (nums[i - 1] !== nums[y]) {
      console.log(nums[i], nums[y]);
      nums[i] = nums[y];
      i++;
    }
  }
  console.log(i, nums);
  return i;
};

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
// let xx = removeDuplicates([1, 1, 2]);
