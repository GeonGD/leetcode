/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function addTwoNumbers(l1, l2) {
    var arr = [];
    function f(arr, l1, l2, n) {
        if (!l1 && !l2) {
            n && arr.push(n);
            return;
        }
        var sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + n;
        var m = ~~(sum / 10);

        arr.push(sum % 10);
        f(arr, l1 && l1.next, l2 && l2.next, m);
    }
    (l1 || l2) && f(arr, l1, l2, 0);
    return arr;
};