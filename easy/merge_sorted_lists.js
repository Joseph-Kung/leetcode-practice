/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */

// iterative
// O(n) time O(1) space
var mergeTwoLists = function (l1, l2) {
  let curr = new ListNode(null);
  let start = curr;

  while (true) {
    if (l1 === null) {
      curr.next = l2;
      break;
    };

    if (l2 === null) {
      curr.next = l1;
      break;
    };

    if (l1.val <= l2.val) {
      curr.next = l1;
      curr = curr.next;
      l1 = l1.next;
    } else {
      curr.next = l2;
      curr = curr.next;
      l2 = l2.next;
    }
  }

  return start.next;
};