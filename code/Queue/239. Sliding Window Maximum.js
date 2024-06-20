/**
 * https://leetcode.com/problems/sliding-window-maximum/
 * @param {*} nums 
 * @param {*} k 
 * Brute Force Paradigm
 * Result: Time Limit Exceeded
 */
// function maxSlidingWindow(nums, k) {
//     let queue = nums.slice(0, k);
//     let res = [Math.max(...queue)];
//     for (let i = k; i < nums.length; i++) {
//         queue.shift();
//         queue.push(nums[i])
//         res.push(Math.max(...queue))
//         console.log('for', queue)
//     }
//     return res
// };

// maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)

/**
 * 方法二：仅维护一个队列，大大减少queue的空间占用，但结果是Time Limit Exceeded
 * Queue
 */
// function maxSlidingWindow(nums: number[], k: number): number[] {
//     if (!nums.length) return [];
//     if (k === 1) return nums;
//     let queue: number[] = [nums[0]];
//     let maxGroup: number[] = [];
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] >= Math.max(...queue)) {
//             queue = [nums[i]]
//         } else {
//             queue.push(nums[i])
//             if (queue.length > k) {
//                 queue.shift()
//             }
//         }
//         if (i >= k - 1) {
//             maxGroup.push(Math.max(...queue))
//         }
//     }
//     return maxGroup
// };

/**
 * 参考解法：https://leetcode.com/problems/sliding-window-maximum/solutions/3916077/acc-100-js-ts-java-c-c-c-python-python3-php-kotlin/
 */
var maxSlidingWindow = function(nums, k) {
    const result = [];
    const deque = []; // Store indices of elements
    
    for (let i = 0; i < nums.length; i++) {
        // Remove elements that are out of the current window
        while (deque.length > 0 && deque[0] < i - k + 1) {
            deque.shift();
        }
        
        // Remove smaller elements as they are not potential max candidates
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }
        
        deque.push(i);
        
        // The front element of the deque is always the maximum for the current window
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }
    
    return result;
};

maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)