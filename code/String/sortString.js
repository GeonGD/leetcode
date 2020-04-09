/**
 * @description 上下升降字符串
 */
const sortString = (s) => {
    // codePointAt方法会正确返回32位的UTF-16字符的码点
    // eslint-disable-next-line no-param-reassign
    s = s.split("").map(str => str.codePointAt());
    let res = [];
    while (s.length) {
        let min = -Infinity;
        let max = Infinity;
        let status = true;
        while (status) {
            // eslint-disable-next-line no-loop-func
            min = Math.min(...s.filter(v => v > min));
            if (min === Infinity) {
                break;
            }
            res.push(min);
            s.splice(s.indexOf(min), 1);
        }
        while (status) {
            // eslint-disable-next-line no-loop-func
            max = Math.max(...s.filter(v => v < max));
            if (max === -Infinity) {
                break;
            }
            res.push(max);
            s.splice(s.indexOf(max), 1);
        }
    }
    return res.map(v => String.fromCharCode(v)).join("");
};
export default sortString;