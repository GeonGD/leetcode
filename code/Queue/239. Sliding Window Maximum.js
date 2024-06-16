/**
 * https://leetcode.com/problems/sliding-window-maximum/
 * @param {*} nums 
 * @param {*} k 
 * Brute Force Paradigm
 * Result: Time Limit Exceeded
 */
function maxSlidingWindow(nums, k) {
    let queue = nums.slice(0, k);
    let res = [Math.max(...queue)];
    for (let i = k; i < nums.length; i++) {
        queue.shift();
        queue.push(nums[i])
        res.push(Math.max(...queue))
        console.log('for', queue)
    }
    return res
};

maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)