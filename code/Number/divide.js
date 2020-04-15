/**
 * @description 两数相除
 */
const divide = (dividend, divisor) => {
    //除数为0返回-1，测试用例写的
    if (divisor === 0) {
        return -1;
    }
    //被除数为0返回0
    if (dividend === 0) {
        return 0;
    }
    //除数为1返回被除数
    if (divisor === 1) {
        return dividend;
    }
    //极端用例，负数的最大绝对值大于正数最大绝对值
    if (dividend === -2147483647 && divisor === -1) {
        return 2147483647;
    }
    if (dividend === -2147483647 && divisor === 1) {
        return -2147483647;
    }
    //由于1 << 31取反会溢出，所以全部转成负整数
    let x = divisor > 0 ? -divisor : divisor;
    let y = dividend > 0 ? -dividend : dividend;
    let result = 0;
    while (y <= x) {
        let i = 1;
        let xi = x << i;
        //当被除数加上除数的2倍、4倍、8倍还小于0时，继续加x<<i，注意x<<i仍然是负数
        while (xi < 0 && y - xi < 0) {
            i++;
            xi = x << i;
        }
        //由于是指数倍加上除数的倍数的绝对值，把被除数接近到差刚刚小于0的情况
        y -= x << i - 1;
        //被除数加上除数i-1的指数倍，商包含1<<(i-1)
        result += 1 << i - 1;
    }
    //异或取反，此时ans不存在溢出问题
    if (dividend > 0 ^ divisor > 0) {
        result = -result;
    }
    return result;
};

export default divide;
