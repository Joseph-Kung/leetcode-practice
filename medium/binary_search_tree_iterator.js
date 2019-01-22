// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  */

var BSTIterator = function (root) {
  this.stack = [];
  let node = root;
  while (node) {
    this.stack.push(node);
    node = node.left;
  }
};

// /**
//  * @return the next smallest number
//  * @return {number}
//  */
BSTIterator.prototype.next = function () {
  let node = this.stack.pop();
  let curr = node.right
  if (curr != undefined) {
    this.stack.push(curr);
    while (curr.left) {
      curr = curr.left
      this.stack.push(curr);
    }
  }
  return node.val;
};

// /**
//  * @return whether we have a next smallest number
//  * @return {boolean}
//  */
BSTIterator.prototype.hasNext = function () {
  return this.stack.length > 0
};


// /**
//  * Your BSTIterator object will be instantiated and called as such:
//  * var obj = Object.create(BSTIterator).createNew(root)
//  * var param_1 = obj.next()
//  * var param_2 = obj.hasNext()
//  */