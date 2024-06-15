/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// 1st solution: base two pointers and light clone
// function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
//     let first = head;
//     let last = head;
//     let step = 0
//     let prev = null
//     if (n <= 0) {
//         return head;
//     }
//     // get the last n node's previous node 
//     while (first) {
//         if (step >= n) {
//             prev = last
//             last = last.next
//         }
//         first = first.next
//         step++
//     }
//     if (prev) {
//         prev.next = last.next
//     } else {
//         head = last.next
//     }
//     return head
// };

