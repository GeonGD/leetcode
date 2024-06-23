/**
 * [1,2,3] + 1 = [1,2,4]
 * eg: input: [1,2,3] output: [1,2,4]
 * eg2: input: [1,2,9] output: [1,3,0]
 * eg3: input: [9,9,9] output: [1,0,0,0]
 */

function digitalAddOne (arr: number[]): number[] {
    for( let i = arr.length -1; i >= 0; i-- ) {
        if( arr[i] < 9 ) {
            arr[i]++
            break;
        } else {
            arr[i] = 0;
            if( i>0 ) {
                arr[i - 1]++;
            } else {
                arr.unshift(1)
            }
        }
    }
    return arr;
}

console.log(digitalAddOne([1,2,3]))
console.log(digitalAddOne([1,2,9]))
console.log(digitalAddOne([9,9,9]))

export default digitalAddOne;
