/**
 * @description 给定一个字符串s，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。重复出现的子串要计算它们出现的次数.
 * @param {string} s
 * @return {number}
 */

// 此算法在字符串过大的时候回出现RegExp too big报错，只适用于长度较短的字符串
// const countBinarySubstrings = function(s) {
//     // 建立数据结构
//     let arr = [];
//     let match = (str) => {
//         let str1 = str.match(/^(0+|1+)/)[0];
//         // 0 ^ 1 = 1; 1 ^ 1 = 0;相当于取反运算
//         let str2 = (str1[0] ^ 1).toString().repeat(str1.length);
//         let reg = new RegExp(`^(${str1}${str2})`);
//         if (reg.test(str)) {
//             return RegExp.$1;
//         }
//         return "";
//     };

//     for (let i = 0; i < s.length - 1; i++) {
//         let sub = match(s.slice(i));
//         if (sub) {
//             arr.push(sub);
//         }
//     }
//     return arr.length;
// };

// const countBinarySubstrings = function(s) {
//     let n = 0;
//     let pre = 0;
//     let curr = 1;

//     for (let i = 0; i < s.length - 1; i++) {
//         if (s[i] === s[i + 1]) {
//             curr++;
//         } else {
//             pre = curr;
//             curr = 1;
//         }
//         if (pre >= curr) {
//             n++;
//         }
//     }
//     return n;
// };

const countBinarySubstrings = function(s) {
    let n = 0;
    let arr = s.match(/([1]+|[0]+)/g);
    for (let i = 0; i < arr.length - 1; i++) {
        n += Math.min(arr[i].length, arr[i + 1].length);
    }
    return n;
};

export default countBinarySubstrings;
