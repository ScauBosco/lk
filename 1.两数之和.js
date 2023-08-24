/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let myarr = [];
  for (let i = 0; i < nums.length; i++) {
    if (myarr.includes(nums[i])) {
      return [myarr.indexOf(nums[i]), i];
    }
    myarr.push(target - nums[i]);
  }

  return [];
};
// @lc code=end
