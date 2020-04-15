/**
 * @description 移除数组元素
 * 标签：交换移除
 * 主要思路是遍历数组nums，遍历指针为i，总长度为ans
 * 在遍历过程中如果出现数字与需要移除的值不相同时，则i自增1，继续下一次遍历
 * 如果相同的时候，则将nums[i]与nums[ans-1]交换，即当前数字和数组最后一个数字进行交换，交换后就少了一个元素，故而ans自减1
 * 这种思路在移除元素较少时更适合使用，最极端的情况是没有元素需要移除，遍历一遍结束即可
 * 时间复杂度：O(n)，空间复杂度：O(1)
 */
const removeElement = (nums, val) => {
    let ans = nums.length;
    for (let i = 0; i < ans; ) {
        if (nums[i] === val) {
            nums[i] = nums[ans - 1];
            ans--;
        } else {
            i++;
        }
    }
    return ans;
};

export default removeElement;
