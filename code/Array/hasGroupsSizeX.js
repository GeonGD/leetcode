/**
 * @description 卡牌分组
 * @param {number[]} deck
 * @return {boolean}
 */
const hasGroupsSizeX = function(deck) {
    // 统计数字个数
    const numMap = {};
    for (let i = 0; i < deck.length; i++) {
        if (!numMap[deck[i]]) {
            numMap[deck[i]] = 1;
        } else {
            numMap[deck[i]]++;
        }
    }
    // 排序
    const valuesArr = Object.values(numMap).sort((a, b) => a - b);
    // 辗转相除法
    let gcd = (a, b) => {
        if (b === 0) {
            return a;
        }
        return gcd(b, a % b);
    };

    while (valuesArr.length > 1) {
        let a = valuesArr.shift();
        let b = valuesArr.shift();
        let v = gcd(a, b);
        if (v === 1) {
            return false;
        }
        valuesArr.unshift(v);
    }
    return valuesArr.length ? valuesArr[0] > 1 : false;
};

export default hasGroupsSizeX;
