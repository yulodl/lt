/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) return false;

    if (root.left === null && root.right === null && targetSum === root.val) return true;

    const restSum = targetSum - root.val;

    return hasPathSum(root.left, restSum) || hasPathSum(root.right, restSum);
};
