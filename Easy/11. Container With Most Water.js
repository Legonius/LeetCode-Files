/**
 * 11. Container With Most Water
Medium
Topics
Companies
Hint
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
 

Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104
 */

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const height2 = [1, 0, 0, 0, 0, 0, 0, 2, 2];
const height3 = [2, 3, 4, 5, 18, 17, 6];

const maxArea = function (height) {
  if (height.length < 2) {
    return;
  }
  let largestArea = 0;

  function findArea(index) {
    let area = 0;
    let largerIndex = index + 1;

    while (height[index] && height[largerIndex] >= 0) {
      let diff = largerIndex - index;
      let allArea;

      if (height[index] > height[largerIndex]) {
        allArea = height[largerIndex] * diff;
      } else {
        allArea = height[index] * diff;
      }
      if (allArea > area) {
        area = allArea;
      }

      largerIndex++;
    }
    return area;
  }
  for (let i = 0; i < height.length - 1; i++) {
    let largerArea = findArea(i);

    if (largerArea > largestArea) {
      largestArea = largerArea;
    }
  }
  return largestArea;
};
document.getElementById("largest-area").innerText = maxArea(height2);

/* Chatt GPT Solution
var maxArea = function(height) {
    let left = 0;                 // Pointer starting at the beginning
  let right = height.length - 1; // Pointer starting at the end
  let largestArea = 0;           // Initialize the largest area as 0

  while (left < right) {
    // Calculate the area between the two pointers
    let width = right - left;
    let area = Math.min(height[left], height[right]) * width;

    // Update the largest area if the current one is larger
    if (area > largestArea) {
      largestArea = area;
    }

    // Move the pointer pointing to the shorter height
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return largestArea;  
};
*/
