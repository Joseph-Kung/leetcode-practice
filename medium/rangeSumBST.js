// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @param {number} L
//  * @param {number} R
//  * @return {number}
//  */

var rangeSumBST = function (root, L, R) {
  let stack = [root];
  let sum = 0;

  while (stack.length > 0) {
    let node = stack.pop();
    if (node === null) continue;
    if (node.val >= L && node.val <= R) {
      sum += node.val;
      stack.push(node.right);
      stack.push(node.left);
    } else if (node.val >= R) {
      stack.push(node.left);
    } else if (node.val <= L) {
      stack.push(node.right);
    }
  }

  return sum;
};