/**
 * https://leetcode.com/problems/kth-largest-element-in-a-stream/
 */
class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.queue = nums.sort((a, b) => b - a).slice(0, k)
    }

    add(val) {
        if(this.queue.length < this.k) {
            this.queue.push(val)
        }else if (val > Number(this.queue[this.queue.length - 1])) {
            this.queue.pop()
            this.queue.push(val)
        }
        this.queue = this.queue.sort((a, b) => b - a)
        return this.queue[this.queue.length - 1]
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */


const kthLargest = new KthLargest(3, [4,5,8,2])
console.log(kthLargest.add(3));
console.log(kthLargest.add(5));
console.log(kthLargest.add(10));
console.log(kthLargest.add(9));
console.log(kthLargest.add(4));