/**
 * 剑指Offer 09，leetcode 已经找不到该题了
 * two functions: appendTail and deleteHead
 */

class MyQueue {
    constructor() {
        this.queue = []
    }

    appendTail(ele) {
        this.queue.push(ele);
        return this.queue;
    }

    deleteHead(ele) {
        if(this.queue.length) {
            this.queue.shift(ele);
            return this.queue;
        }
        return -1
    }
}