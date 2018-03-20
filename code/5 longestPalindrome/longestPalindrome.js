/**
 * @description 最长回文子串
 * @param {string} s
 * @return {string}
 * @author HeHuan
 * 运行超时，待优化
 */
var longestPalindrome = function (s) {
    switch (s.length) {
        case 0:
            return '';
        case 1:
            return s;
        case 2:
            return s[0] === s[1] ? s : s[0];
        default:
            if (s.length >= 1000) {
                return false;
            }
            let longest = s[0];
            let str, flag;
            for (let i = 0; i < s.length - 1; i++) {
                if (s[i] === s[i + 1] && longest.length <= 2) {
                    longest = s.slice(i, i + 2)
                }
                for (let j = i + 3; j <= s.length; j++) {
                    str = s.slice(i, j)
                    let p = Math.floor(str.length / 2)
                    for (let k = p; k >= 1; k--) {
                        if (str.length % 2 == 0 && str[p - k] === str[p + k - 1]) {
                            flag = true
                        } else if (str.length % 2 !== 0 && str[p - k] === str[p + k]) {
                            flag = true
                        } else {
                            flag = false
                            break
                        }
                    }
                    if (flag && str.length > longest.length) {
                        longest = str
                    }
                }
            }
            return longest
    }
};
