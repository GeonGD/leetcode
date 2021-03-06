// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }

function mergeTwoLists(l1, l2) {
    const dummyHead = {};
    let current = dummyHead;
    // l1: 1 -> 3 -> 5
    // l2: 2 -> 4 -> 6
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1; // 把小的添加到结果链表
            current = current.next; // 移动结果链表的指针
            // eslint-disable-next-line no-param-reassign
            l1 = l1.next; // 移动小的那个链表的指针
        } else {
            current.next = l2;
            current = current.next;
            // eslint-disable-next-line no-param-reassign
            l2 = l2.next;
        }
    }

    if (l1 === null) {
        current.next = l2;
    } else {
        current.next = l1;
    }
    return dummyHead.next;
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function (lists) {
    if (lists.length === 0) {
        return null;
    }
    if (lists.length === 1) {
        return lists[0];
    }
    if (lists.length === 2) {
        return mergeTwoLists(lists[0], lists[1]);
    }

    const mid = lists.length >> 1;
    const l1 = [];
    for (let i = 0; i < mid; i++) {
        l1[i] = lists[i];
    }

    const l2 = [];
    for (let i = mid, j = 0; i < lists.length; i++, j++) {
        l2[j] = lists[i];
    }

    return mergeTwoLists(mergeKLists(l1), mergeKLists(l2));
};

export default mergeKLists;
