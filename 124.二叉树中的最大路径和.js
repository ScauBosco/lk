/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
 */

// @lc code=start
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
 * @return {number}
 */
var maxPathSum = function (root) {
  let max = root.val;
  let dummy = root;

  var digui = (node) => {
    if (!node) return 0;
    let left = digui(node.left);
    let right = digui(node.right);
    let maxChild = Math.max(node.val + left, node.val + right, node.val);
    max = Math.max(max, node.val + left + right, maxChild);
    return maxChild;
  };
  digui(dummy);
  return max;
};
// @lc code=end
