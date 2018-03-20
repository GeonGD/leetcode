/**
 * @description 给定一个字符串，找出不含有重复字符的 最长子串 的长度。
 * @param {string} s
 * @return {number}
 * @author HeHuan
 */
var lengthOfLongestSubstring = function (s) {
    let final = 0;
    for (let i = 0; i < s.length; i++) {
        let str = s[i]
        for (let j = i + 1; j < s.length; j++) {
            if (str.indexOf(s[j]) !== -1) {
                break;
            }
            str = str.concat(s[j])
        }
        if (str.length > final) {
            final = str.length
        }
    }
    return final
};