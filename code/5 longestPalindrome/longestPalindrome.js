/**
 * @description 最长回文子串
 * @param {string} s
 * @return {string}
 * @author HeHuan
 * 运行超时，待优化
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
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
