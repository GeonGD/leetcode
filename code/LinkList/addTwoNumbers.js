/**
 * @description 两数相加
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
const addTwoNumbers = (l1, l2) => {
    let arr1 = [];
    let arr2 = [];
    while (l1) {
        arr1.push(l1.val);
        // eslint-disable-next-line no-param-reassign
        l1 = l1.next;
    }
    while (l2) {
        arr2.push(l2.val);
        // eslint-disable-next-line no-param-reassign
        l2 = l2.next;
    }
    let res = [0];
    for (let i = arr1.length - 1, j = arr2.length - 1, k = 0; i >= 0 || j >= 0; k++, i--, j--) {
        let num1 = i >= 0 ? arr1[i] : 0;
        let num2 = j >= 0 ? arr2[j] : 0;
        console.log(num1, num2, res[k]);
        let a = num1 + num2 + res[k];

        res[k] = a % 10;
        res[k + 1] = a / 10 | 0;
    }
    let start = new ListNode(res[res.length - 2]);
    let node1 = start;
    for (let i = res.length - 3; i >= 0; i--) {
        let node = new ListNode(res[i]);
        node1.next = node;
        node1 = node1.next;
    }
    if (res[res.length - 1] !== 0) {
        let node2 = new ListNode(res[res.length - 1]);
        node2.next = start;
        return node2;
    }
    return start;
};

export default addTwoNumbers;
