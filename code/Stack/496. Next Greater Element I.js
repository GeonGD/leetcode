/**
 * https://leetcode.com/problems/next-greater-element-i/
 * 单调递增栈，谁让其出栈的，则nextGreaterElement就是该元素，用map收集起来
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
function nextGreaterElement(nums1, nums2) {
    // <!-- 存储nums2所有nextGreaterElement元素 -->
    let nextGreaterMap = new Map();
    // <!-- 一个单调递增栈 -->
    let increaseStack = [];

    for(const n of nums2) {
        while(increaseStack.length && n > increaseStack[increaseStack.length - 1]) {
            nextGreaterMap.set(increaseStack.pop(), n);
        }
        increaseStack.push(n);
    }

    let res = [];
    for(const n of nums1) {
        if(nextGreaterMap.has(n)) {
            res.push(nextGreaterMap.get(n))
        } else {
            res.push(-1)
        }
    }
    return res;
};

nextGreaterElement([1,3,5,2,4], [6,5,4,3,2,1,7])
