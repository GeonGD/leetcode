function longestPalindromic(s) {
    let longestStr = ''
    for(let i = 0; i < s.length; i++) {
        let j = s.length - 1
        while(j>i) {
            if(s[i] === s[j]) {
                let str = s.slice(i, j+1)
                if(isPalindromic(str)) {
                    longestStr = str.length > longestStr.length ? str: longestStr
                    break;
                }
            }
            j--
        }
    }
    return longestStr
}

function isPalindromic(s) {
    let i = 0
    let j = s.length-1
    let res = true
    while(i<j) {
        if(s[i] === s[j]) {
            i++
            j--
        } else {
            res = false
            break
        }
    }
    return res
}