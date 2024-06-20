/**
 * https://leetcode.cn/problems/H8086Q/
 */
class RecentCounter {
    constructor() {
        this.recentArr = []
    }

    ping(t) {
        this.recentArr.push(t)
        const minT = t - 3000;
        if (this.recentArr.length === 1) {
            return this.recentArr.length
        } else {
            let newRecentArr = [];
            for (let i = 0; i < this.recentArr.length; i++) {
                if (this.recentArr[i] >= minT) {
                    newRecentArr.push(this.recentArr[i])
                }
            }
            this.recentArr = newRecentArr || [];
            return this.recentArr.length
        }

    }
}

let r = new RecentCounter()
console.log('ping1', r.ping(1));
console.log('ping2',r.ping(100));
/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */