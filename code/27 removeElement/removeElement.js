/**
 * @description 移除数组中指定的元素
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * @author HeHuan
 */
var removeElement = function (nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1)
            removeElement(nums, val)
            return
        }
    }
};