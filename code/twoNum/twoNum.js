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

  //方法三
  function twoSum(nums,target){
  	let arr=nums.sort((a,b)=>{return a-b})
  	let n=nums.length
  	for(i = 0, j = n-1; i < j ; )
	{
		if(arr[i] + arr[j] == target)
			return ( i , j );
		else if(arr[i] + arr[j] < target)
			i++;
		else
			j--;
	}
	return ( -1 , -1 );
  }