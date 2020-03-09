/**
 * @description 种花问题
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function(flowerbed, n) {
    flowerbed.unshift(0);
    flowerbed.push(0);
    if (n <= 0) {
        return true;
    }
    let maxNum = n;
    let result = false;
    for (let i = 1; i < flowerbed.length - 1; i++) {
        if (flowerbed[i] === 1) {
            continue;
        }
        if (flowerbed[i + 1] === 1) {
            continue;
        }
        if (flowerbed[i - 1] === 1) {
            continue;
        }
        flowerbed[i] = 1;
        maxNum -= 1;
        if (maxNum <= 0) {
            result = true;
            break;
        }
    }
    return result;
};

export default canPlaceFlowers;
