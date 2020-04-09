/**
 * @description 删除排序数组中的重复项
 * @param {number[]} nums
 */
const removeDuplicates = (nums) => {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i+1]) {
            nums[index] = nums[i];
            index++;
        }
    }
    return index;
};

export default removeDuplicates;