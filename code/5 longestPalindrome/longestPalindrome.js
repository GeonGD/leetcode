/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    var str = '';
    var arr = [];
    var max = 0;
    var x = 0;
    var str = '#' + s.split('').join('#') + '#';

    var len = str.length;
    for (var i = 0; i < len; i++) {
        if (max > i) {
            arr[i] = Math.min(arr[2 * x - i], max - i);
        } else {
            arr[i] = 1
        }
        while (str[i - arr[i]] === str[i + arr[i]]) {
            arr[i]++
        };

        if (arr[i] + i > max) {
            max = arr[i] + i, x = i;
        }
    }
    var ans = 0;
    var pos;

    for (var i = 0; i < len; i++) {
        if (arr[i] > ans) {
            ans = arr[i], pos = i;
        }

    }

    var f = str[pos] === '#';
    var ret = f ? '' : str[pos];
    var startPos = f ? pos + 1 : pos + 2;
    var endPos = f ? arr[pos] - 3 + startPos : arr[pos] - 4 + startPos;

    for (var i = startPos; i <= endPos; i += 2) {
        ret = str[i] + ret + str[i];
    }

    return ret;
};

var s = "abacddc";
console.time("test")
var str = longestPalindrome(s)
console.log(str)
console.timeEnd("test")
