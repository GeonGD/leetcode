/**
 * @description 给定一个只包括 '('，')'，'{'，'}'，'['，']'的字符串，判断字符串是否有效
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 注意空字符串可被认为是有效字符串。
 * 思路 栈
 */

const isValid = (str) => {
    if (str.length % 2) {
        return false;
    }
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        switch (letter) {
        case "(":
        case "[":
        case "{":
            arr.push(letter);
            break;
        case ")":
            if (arr.pop() !== "(") {
                return false;
            }
            break;
        case "]":
            if (arr.pop() !== "[") {
                return false;
            }
            break;
        case "}":
            if (arr.pop() !== "{") {
                return false;
            }
            break;
        }
    }
    return !arr.length;
};

export default isValid;
