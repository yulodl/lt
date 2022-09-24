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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const ans = [];
    const findPath = (node, prePath, preSum) => {
        const {val, left, right} = node;
        const sum = preSum + node.val;
        // const path = [...prePath, val];
        prePath.push(val);
        if (sum === targetSum && !left && !right) {
                ans.push(prePath.slice());
        }

        if (left) findPath(left, prePath, sum);
        if (right) findPath(right, prePath, sum);

        prePath.pop(val);
    };

    if (root) findPath(root, [], 0);

    return ans;
};
