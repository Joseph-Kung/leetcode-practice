// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
var minDepth = function (root) {
  if (!root) return 0;
  if (root.left === null && root.right === null) return 1;

  let min = Number.POSITIVE_INFINITY;

  if (root.left) {
    min = Math.min(minDepth(root.left), min);
  }

  if (root.right) {
    min = Math.min(minDepth(root.right), min);
  }

  return min + 1;
};