/**
 * https://leetcode.com/problems/valid-parentheses/description/
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const charactersMap = new Map([["(", ")"], ["{", "}"], ["[", "]"]]);
    let temp = [];
    if (s.length % 2 !== 0) return false;
    for (let i = 0; i < s.length; i++) {
        if (!temp.length) {
            temp.push(s[i]);
            continue;
        }
        let target = charactersMap.get(temp[temp.length - 1]);
        // 栈顶非左开口字符，注定匹配不上，返回false
        if (!target) {
            return false;
        }

        // 与栈顶匹配上，temp长度消1
        if (s[i] === target) {
            temp.splice(temp.length - 1, 1)
        } else {
            temp.push(s[i])
        }
    }

    return temp.length ? false : true
};

console.log(isValid("()][{}"));
