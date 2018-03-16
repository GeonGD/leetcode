/**
 * @param {string} s
 * @return {number}
 * @author HeHuan
 */
var lengthOfLongestSubstring = function (s) {
    let final = s[0];
    for (let i = 0; i < s.length - 1; i++) {
        let str = s[i]
        for (let j = i + 1; j < s.length; j++) {
            if (str.indexOf(s[j]) !== -1) {
                break;
            }
            str = str.concat(s[j])
        }
        if (str.length > final.length) {
            final = str
        }
    }
    return final.length
};