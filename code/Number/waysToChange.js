/**
 * @param {number} n
 * @return {number}
 */
const waysToChange = function (n) {
    let mod = 1e9 + 7;
    let res = 0;
    for (let i = 0; i <= ~~(n / 25); i++) {
        let a = ~~((n - i * 25) / 10);
        let t = (a + 1) * (~~(n / 5) - 5 * i - a + 1);
        res = (res + t) % mod;
    }
    return res;
};

export default waysToChange;
