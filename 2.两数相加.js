/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head = new ListNode(-1, null);
  let p = head;
  let carry = 0;
  //   let res = [];
  let result;
  var resAdd = (a, b, rescarry) => {
    let calc = a + b + rescarry;
    return [calc % 10, Math.floor(calc / 10)];
  };
  while (l1 && l2) {
    result = resAdd(l1.val, l2.val, carry);
    p.next = new ListNode(result[0], null);
    p = p.next;
    carry = result[1];
    l1 = l1.next;
    l2 = l2.next;
  }
  let l = l1 || l2;
  while (l) {
    result = resAdd(l.val, 0, carry);
    p.next = new ListNode(result[0], null);
    p = p.next;
    carry = result[1];
    l = l.next;
  }
  if (carry == 1) p.next = new ListNode(1, null);
  return head.next;
};

// @lc code=end
