/**
 * 
 * @param {*} s1 
 * @param {*} s2 
 */
function areAlmostEqual(s1, s2) {
    let diffIndices = []
    for(let i = 0; i<s1.length; i++) {
        if(s1[i] !== s2[i]) {
            diffIndices.push(i)
        }
    }

    if(diffIndices.length >2) {
        return false
    }else if(diffIndices.length ===0) {
        return true
    } else {
        let arr1 = s1.split('')
        let temp = arr1[diffIndices[0]]
        arr1[diffIndices[0]] = arr1[diffIndices[1]]
        arr1[diffIndices[1]] = temp
        return arr1.join('') === s2
    }
};
