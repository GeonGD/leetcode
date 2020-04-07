/**
 * 正则表达式匹配
 *
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function(s, p) {
    let n = s.length;
    let m = p.length;
    let dp = Array.from(new Array(n + 1), () => new Array(m + 1).fill(false));
    dp[0][0] = true;
    for (let i = 0; i <= m; i++) {
        if (p[i] === "*" && dp[0][i - 1]) {
            dp[0][i + 1] = true;
        }
    }
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (p[j - 1] === s[i - 1] || p[j - 1] === ".") {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === "*") {
                if (p[j - 2] !== s[i - 1]) {
                    dp[i][j] = dp[i][j - 2];
                }
                if (p[j - 2] === s[i - 1] || p[j - 2] === ".") {
                    dp[i][j] = dp[i - 1][j] || dp[i][j - 1] || dp[i][j - 2];
                }
            }
        }
    }
    return dp[n][m];
};

// const isMatch = function(str, mode) {
//     // 对模式变量进行正则筛选
//     let modeArr = mode.match(/([a-z.]\*)|([a-z]+(?=([a-z.]\*)|$))/g);
//     let cur = 0;
//     let strLen = str.length;
//     for (let i = 0, len = modeArr.length, m; i < len; i++) {
//         // 对于模式分为三类，.*|a*|cdef
//         m = modeArr[i].split("");
//         // 如果第二位是*表示是有模式的
//         if (m[1] === "*") {
//             if (m[0] === ".") {
//                 cur = strLen;
//                 break;
//             } else {
//                 while (str[cur] === m[0]) {
//                     cur++;
//                 }
//             }
//         } else {
//             for (let j = 0, jl = m.length; j < jl; j++) {
//                 if (m[j] !== str[cur]) {
//                     return false;
//                 }
//                 cur++;
//             }
//         }
//     }
//     return cur === strLen;
// };

export default isMatch;
