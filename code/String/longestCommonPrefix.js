/**
 * @description 查找字符串数组中的最长公共前缀。
 * @param {string[]} strs
 */
const longestCommonPrefix = (strs) => {
    if (!strs.length) {
        return "";
    }
    let [a, ...b] = strs;
    let result = "";
    for (let i = 0; i < a.length; i++) {
        let flag = b.every((item) => item[i] === a[i]);
        if (flag) {
            result += a[i];
        } else {
            break;
        }
    }
    return result;
};

export default longestCommonPrefix;
