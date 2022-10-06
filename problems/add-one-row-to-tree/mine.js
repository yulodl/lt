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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
    if (depth === 1) {
        return new TreeNode(val, root);
    }

    let curNodes = [root];
    let curDepth = 1;
    while (curDepth < depth) {
        const childNodes = [];
        curNodes.forEach(node => {
            if (node.left) childNodes.push(node.left);
            if (node.right) childNodes.push(node.right);
        });
        curNodes = childNodes;
        curDepth++;
    }

    curNodes.forEach(node => {
        const {left, right} = node;
        node.left = new TreeNode(val, left);
        node.right = new TreeNode(val, null, right);
    });

    return root;
};
