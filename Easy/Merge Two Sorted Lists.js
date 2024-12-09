/*21. Merge Two Sorted Lists
Easy
Topics
Companies
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order. */

const list1 = [1, 2, 4];
const list2 = [1, 3, 4];
/*
var mergeTwoLists = function (list1, list2) {
  let array = [];
  function pushing(arr) {
    if (arr) {
      for (let x = 0; x < arr.length; x++) {
        array.push(arr[x]);
      }
    }
  }
  pushing(list1);
  pushing(list2);
  array.sort();
  console.log(array);
  return array;
};
document.getElementById("answer").innerText = mergeTwoLists(list1, list2);
*/
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeTwoLists(list1, list2) {
  function arrayToList(arr) {
    if (arr.length === 0) return null;

    let head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
    }

    return head;
  }
  let prehead = new ListNode(-1);
  let current = prehead;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  current.next = list1 !== null ? list1 : list2;

  return prehead.next;
}

function printList(list) {
  let arr = [];
  while (list !== null) {
    arr.push(list.val);
    list = list.next;
  }
  return arr;
}

// Merge the lists
const mergedList = mergeTwoLists(list1, list2);

// Print the merged linked list
console.log(printList(mergedList));

document.getElementById("answer").innerText = mergeTwoLists(list1, list2);
