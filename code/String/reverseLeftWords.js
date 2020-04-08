/**
 * @description 左旋转字符串
 */
const reverseLeftWords = (s, n) => {
    return s.slice(n) + s.slice(0, n);
};

export default reverseLeftWords;
