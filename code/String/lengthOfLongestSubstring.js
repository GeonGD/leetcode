/**
 * @description 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度
 * 思路 滑动窗口
 */
const lengthOfLongestSubstring = (str) => {
    if (!str.length) {
        return 0;
    }
    let strArr = [str[0]];
    let res = 1;
    for (let i = 0; i < str.length ;i++) {
        let index = strArr.indexOf(str[i]);
        if (index < 0) {
            strArr.push(str[i]);
        } else {
            res = res > strArr.length ? res : strArr.length;
            strArr.splice(0, index + 1);
            strArr.push(str[i]);
        }
    }
    return res > strArr.length ? res : strArr.length;
};

export default lengthOfLongestSubstring;
