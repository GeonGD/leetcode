/**
 * https://leetcode.com/problems/reverse-string-ii/
 * @param {string} s 
 * @param {number} k 
 */
function reverseStr(s, k) {
    let arr = s.split('');
    for(let g=0; g<arr.length; g = g+2*k) {
        let i = g
        let j = g+k-1 > arr.length - 1?arr.length - 1:g+k-1
        while(i<j) {
            let temp = arr[j]
            arr[j] = arr[i]
            arr[i] = temp
            console.log(arr)
            i++
            j-- 
        }
    }
    return arr.join('');
};
