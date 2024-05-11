/**
 * https://leetcode.com/problems/decode-ways/?envType=daily-question&envId=2024-05-06
 * @param {*} s 
 * @returns 
 * input 2101 error
 */
// function numDecodings(s) {
//     let arr = s.split('');
//     let count = 0;
//     let group = 0;
//     let index = 0;
//     if (s.startsWith('0')) {
//         return 0
//     }
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] === '0' || arr[i - 1] === '0') {
//             return
//         }
//         let subNumber = Number(s[i].concat(s[i + 1]));
//         if (subNumber <= 26 && subNumber !== 10 && subNumber !== 20) {
//             count++;
//             if (i === 0 || i > index + 1) {
//                 group++;
//             }
//             index = i;
//         }

//     }
//     return count + 1 + Math.pow(2, group - 1) - 1
// };

// function numDecodings(s) {
    
//     let count = 0;
//     let group = 0;
    
//     if(s.startsWith('0')) {
//         console.error('decode error')
//         return 0
//     }

//     let arr = s.split('0')
//     for (let i = 0; i < arr.length -1; i++) {
//         const end = arr.length === 1?1:2;
//         if(!arr[i].endsWith('1') && !arr[i].endsWith('2')) {
//             console.error('decode error')
//             return 0
//         }

//         let subArr = arr[i].split('');
//         let index = 0;
//         console.log('subArr',subArr)
//         for(let j =0;j<subArr.length-end; j++){
//             let subNumber = Number(subArr[j].concat(s[j + 1]));
//             if (subNumber <= 26) {
//                 count++;
//                 if (j === 0 || j > index + 1) {
//                     group++;
//                 }
//                 index = j;
//             }
//         }

//     }

//     if(group === 0) {
//         return count + 1;
//     }
//     return count + 1 + Math.pow(2, group - 1) - 1
// };

function numDecodings(s) {
    let [next1, next2] = [1,1]
    for(let i = s.length-1; i>=0; --i) {
        let res = 0;
        if(s.at(i) === '0') {
            res = 0
        }else {
            res = next1
            if(i <= s.length -2 && Number(s.substring(i, i+2))<=26) {
                res+=next2

            }
        }
        [next1, next2] = [res, next1]
    }
    return next1
};
