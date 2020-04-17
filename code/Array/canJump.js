/**
 * @description 跳跃游戏
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function (nums) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > k) {
            return false;
        }
        k = Math.max(k, i + nums[i]);
    }
    return true;
};

export default canJump;
