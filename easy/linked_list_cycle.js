// O(n) time and space
var hasCycle = function (head) {
  let seen = [];
  let node = head;

  while (node) {
    if (seen.includes(node)) return true;
    seen.push(node);
    node = node.next;
  }

  return false;
};

// O(n) time and O(1) space with 2 pointers
var hasCycle = function (head) {
  if (!head || !head.next) return false
  let slow = head;
  let fast = slow.next;

  while (fast) {
    if (fast === slow) return true;
    if (fast === null || fast.next === null) return false
    fast = fast.next.next;
    slow = slow.next;
  }

  return false;
};