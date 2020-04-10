/**
 * @description 翻转字符串里的单词
 */
const reverseWords = (s) => {
    let ret = [];
    let word = [];
    // eslint-disable-next-line no-param-reassign
    s += " ";

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === " ") {
            if (i !== 0 && s[i - 1] !== " ") {
                ret.unshift(word.join(""));
                word = [];
            } else {
                continue;
            }
        } else {
            word.push(char);
        }
    }

    return ret.join(" ");
};

export default reverseWords;