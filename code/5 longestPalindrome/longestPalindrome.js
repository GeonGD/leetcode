/**
<<<<<<< HEAD
=======
 * @description 最长回文子串
 * @param {string} s
 * @return {string}
 * @author HeHuan
 * 运行超时，待优化
 */
/**
>>>>>>> 36143f07ec5c65641c5d32db1ffd14809a49ac91
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
<<<<<<< HEAD
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
=======
	switch (s.length) {
		case 0:
		case 1:
			return s;
		case 2:
			return s[0] === s[1] ? s : s[0];
		default:
			if (s.length > 1000) {
				return '字符过长'
			}
			let longest = s[0];
			for (let i = 0; i < s.length - 1; i++) {
				if (longest.length < 2 && s[i] === s[i + 1]) {	// 有俩个连续一样的字符
					longest = s.slice(i, i + 2)
				}
				for (let j = i + 3; j <= s.length; j++) {
					let str = s.slice(i, j)
					if (longest.length >= str.length) {	// 找出的回文比str.length长，不继续判断
						continue
					}
					let p = Math.floor(str.length / 2)
					let flag = false;
					for (let k = p; k >= 1; k--) {  // 逻辑代码，判断是否是回文
						if (str.length % 2 == 0 && str[p - k] === str[p + k - 1]) {
							flag = true
						} else if (str.length % 2 !== 0 && str[p - k] === str[p + k]) {
							flag = true
						} else {
							flag = false
							break
						}
					}
					if (flag && str.length > longest.length) {
						longest = str
					}
				}
			}
			return longest
	}
};
>>>>>>> 36143f07ec5c65641c5d32db1ffd14809a49ac91
