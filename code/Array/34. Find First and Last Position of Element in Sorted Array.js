/**
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 */

function searchRange(nums, target) {
    let startIndex = -1;
    let endIndex = -1;
    for (let i = 0; i < nums.length; i++) {
        let j = nums.length - 1 - i;
        if (nums[i] === target && startIndex === -1) {
            startIndex = i
        }
        if (nums[j] === target && endIndex === -1) {
            endIndex = j
        }

        if ((startIndex > -1 && endIndex > -1) || (endIndex > -1 && endIndex < startIndex)) break
    }

    return [startIndex, endIndex]
};

searchRange([1,3], 1)