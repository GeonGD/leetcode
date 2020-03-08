/**
 * @description 电话号码的字母组合
 * @param {string} digits
 * @return {string[]}
 */
// const letterCombinations = function(digits) {
//     const reg = /[2-9]{1,}/g;
//     if (!reg.test(digits)) {
//         return [];
//     }
//     let letterMap = new Map();
//     letterMap.set("2", ["a", "b", "c"]);
//     letterMap.set("3", ["d", "e", "f"]);
//     letterMap.set("4", ["g", "h", "i"]);
//     letterMap.set("5", ["j", "k", "l"]);
//     letterMap.set("6", ["m", "n", "o"]);
//     letterMap.set("7", ["p", "q", "r", "s"]);
//     letterMap.set("8", ["t", "u", "v"]);
//     letterMap.set("9", ["w", "x", "y", "z"]);

//     let first = letterMap.get(digits[0]);
//     if (digits.length === 1) {
//         return first;
//     }

//     let combination = (firstArr, subDigits) => {
//         let next = letterMap.get(subDigits[0]);
//         let result = firstArr.reduce((acc, curr) => {
//             next.forEach((ele) => {
//                 acc.push(`${curr}${ele}`);
//             });
//             return acc;
//         }, []);
//         if (subDigits.length === 1) {
//             return result || [];
//         }
//         return combination(result, subDigits.substring(1));
//     };
//     return combination(first, digits.substring(1));
// };

const letterCombinations = function(digits) {
    //对电话号码做映射
    let map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    if (!digits) {
        return [];
    } else if (digits.length === 1) {
        return map[digits].split("");
    }

    let keyArr = digits.split("");
    let tempArr = []; //保存映射后的字母
    keyArr.forEach((item) => {
        if (map[item]) {
            //这里字符串会自动转数字
            tempArr.push(map[item]);
        }
    });
    let combinations = (arr) => {
        let result = [];
        let firstLetter = arr[0];
        let nextLetter = arr[1];
        for (let i = 0; i < firstLetter.length; i++) {
            for (let j = 0; j < nextLetter.length; j++) {
                result.push(firstLetter[i] + nextLetter[j]);
            }
        }
        arr.splice(0, 2, result);
        if (arr.length > 1) {
            combinations(arr);
        } else {
            return result;
        }
        return arr[0];
    };
    return combinations(tempArr);
};

export default letterCombinations;
