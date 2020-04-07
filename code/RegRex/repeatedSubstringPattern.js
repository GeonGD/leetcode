/**
 * 459  重复的子字符串
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = function(s) {
    let reg = /^(\w+)\1+$/;
    return reg.test(s);
};

export default repeatedSubstringPattern;