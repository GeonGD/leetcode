/**
 * https://leetcode.com/problems/binary-subarrays-with-sum/?envType=daily-question&envId=2024-05-06
 * @param {*} nums 
 * @param {*} goal 
 * @returns 
 */
function numSubarraysWithSum(nums, goal) {
    let preSumArr = new Array(nums.length+1).fill(0);
    for (let i = 0; i < nums.length; i++) {
        preSumArr[i+1] = preSumArr[i] + nums[i];
    }
    let freqMap = new Map();
    let count = 0
    for (let j = 0; j < preSumArr.length; j++) {
        if (freqMap.has(preSumArr[j] - goal)) {
            console.log(count, freqMap.get(preSumArr[j] - goal), '~')
            count += freqMap.get(preSumArr[j] - goal)
        }
        freqMap.set(preSumArr[j], (freqMap.get(preSumArr[j]) || 0) + 1);
        console.log(freqMap)
    }
    return count
};
