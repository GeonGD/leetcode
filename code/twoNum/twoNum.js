// 方法1
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    var a = [];
    for (var i = 0, len = nums.length; i < len; i++) {
      var tmp = target - nums[i];
      if (a[tmp] !== undefined) return [a[tmp], i];
      a[nums[i]] = i;
    }
  };
  
  // 方法2
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  var twoSum = function(nums, target) {
  var resuts,num,diff = [];
  for (var i = 0, n = nums.length; i < n; i++) {
      //var index = nums.indexOf(target - nums[i]);
      //index > -1 && (resuts = [index, i])
      num = nums[i];
      var diffNum = diff[num];
      (diffNum || diffNum == 0)?(resuts = [diffNum, i]):(diff[target - num] = i)
  }
  return resuts;
  }