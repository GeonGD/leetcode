function minAddToMakeValid(s) {
    const unParenthesesStack = [];
    const parenthesesMap = new Map([['(', ')'], ['{', '}']]);
    for (let i = 0; i < s.length; i++) {
        const len = unParenthesesStack.length;
        if (s[i] === parenthesesMap.get(unParenthesesStack[len - 1])) {
            unParenthesesStack.pop();
        } else {
            unParenthesesStack.push(s[i]);
        }
    }
    return unParenthesesStack.length;
};