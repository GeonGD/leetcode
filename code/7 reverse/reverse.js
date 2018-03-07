/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  // 有符号整数使用 31 位表示整数的数值，用第 32 位表示整数的符号，0 表示正数，1 表示负数。数值范围从 -2147483648 到 2147483647
  var minn = - (1 << 30) * 2; // -2147483648
  var maxn = (1 << 30) * 2 - 1; // 2147483647
  var ans;
  var arr = x.toString().split('');
  if (x < 0) 
    arr.shift();
  ans = Number(arr.reverse().join(''));
  if (x < 0)
    ans *= -1;
  if (ans < minn || ans > maxn)
    return 0;
  else
    return ans;
};
