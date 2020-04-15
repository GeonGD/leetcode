/**
 * @description 汉诺塔
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @return {void} Do not return anything, modify C in-place instead.
 */
const hanota = (A, B, C) => {
    let move = (a, b, c, n) => {
        // n个盘子从A到C
        if (n === 0) {
            return;
        }
        move(a, c, b, n - 1); // n - 1个盘子从A到B
        c.push(a.pop()); // n从A到C
        move(b, a, c, n - 1); // n - 1个盘子从B到C
    };
    return move(A, B, C, A.length);
};

export default hanota;
