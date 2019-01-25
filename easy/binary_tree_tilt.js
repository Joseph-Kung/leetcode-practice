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


var findTilt = function (root) {
  let tilt = 0

  const traverse = root => {
    if (root === null) return 0

    let left = traverse(root.left);
    let right = traverse(root.right);

    tilt += Math.abs(left - right);
    return root.val + left + right
  }

  traverse(root);

  return tilt;
};

// O(N) time complexity as all nodes must be traversed
