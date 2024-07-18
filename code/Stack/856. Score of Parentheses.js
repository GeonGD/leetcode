/**
 * https://leetcode.com/problems/score-of-parentheses/description/
 */

function scoreOfParentheses(s) {
    const stack = [0];
    for (const str of s) {
        if (str === '(') {
            stack.push(0);
        } else if (str === ')') {
            const number = stack.pop();
            const score = 2 * number || 1;
            stack[stack.length - 1] += score;
        }
    }
    return stack.pop();
}