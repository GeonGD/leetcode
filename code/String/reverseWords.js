/**
 * @description 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
 * @param {string} str
 * @returns {string}
 */

// const reverseWords = function(str) {
//     // 字符串按空格进行分割，保存数组，数组的顺序就是单词排列的顺序
//     return str.split(" ").map((item) => item.split("").reverse().join("")).join(" ");
// };

const reverseWords = function(str) {
    let arr = str.split("").reverse().join("");
    return arr.split(" ").reverse().join(" ");
};


export default reverseWords;