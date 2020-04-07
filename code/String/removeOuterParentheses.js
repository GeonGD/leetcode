/**
 * @description  删除最外层的括号
 */
const removeOuterParentheses = (s) => {
    let stack = [];
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            count++;
            if (count >= 2) {
                stack.push(s[i]);
            }
        } else if (s[i] === ")") {
            count--;
            if (count >= 1) {
                stack.push(s[i]);
            }
        }   
        // console.log(`${i} =>>>>>>>>>>>>> ${count}`, count, stack);
    }
    return stack.join("");
};

export default removeOuterParentheses;
