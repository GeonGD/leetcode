/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 */

function lengthOfLongestSubstring(s) {
    let str = '';
    let len = 0;
    for (let i = 0; i < s.length; i++) {
        const index = str.indexOf(s[i])
        if (index < 0) {
            str += s[i];
            len = str.length > len ? str.length : len;
        } else {
            len = str.length > len ? str.length : len;
            str = str.slice(index + 1, s.length - 1) + s[i]
        }
    }
    return len
};

lengthOfLongestSubstring('abcabcbb') // 3