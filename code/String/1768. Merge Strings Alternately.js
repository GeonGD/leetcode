/**
 * https://leetcode.com/problems/merge-strings-alternately/
 * @param {string} word1 
 * @param {string} word2 
 */
function mergeAlternately(word1, word2) {
    let arr1 = word1.split('')
    let arr2 = word2.split('')
    let newArr = [];
    let maxLength = Math.max(arr1.length, arr2.length);
    for(let i = 0; i<maxLength; i++) {
        if(arr1[i]) {
            newArr.push(arr1[i])
        }
        if(arr2[i]) {
            newArr.push(arr2[i])
        }
    }
    return newArr.join('')
};

console.log(mergeAlternately('ab', 'cde'))