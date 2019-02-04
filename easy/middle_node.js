// O(n) time

var middleNode = function (head) {
  let length = 0;
  let node = head;

  while (node) {
    length += 1;
    node = node.next;
  }

  node = head;

  for (let i = 0; i < Math.floor(length / 2); i++) {
    node = node.next;
  }

  return node;
};