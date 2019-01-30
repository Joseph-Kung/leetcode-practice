/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// /**
//  * @param {TreeNode} root
//  * @return {number[]}
//  */


// recursive solution
var inorderTraversal = function (root) {
  if (root === null) return [];

  let left = inorderTraversal(root.left);
  let right = inorderTraversal(root.right);

  return left.concat([root.val]).concat(right);
};




// iterative solution
var inorderTraversal = function (root) {
  let stack = [];
  let ans = [];
  let curr = root;

  while (curr !== null || stack.length > 0) {
    // iterate down to left most node of root
    while (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    }

    // Look one node back, push node val, look at right of that node
    curr = stack.pop();
    ans.push(curr.val);
    curr = curr.right;
  }

  return ans;
};