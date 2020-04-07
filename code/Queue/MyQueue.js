/**
 * 化栈为队
 */
const MyQueue = function () {
    this.queue1 = [];
    this.queue2 = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    while (this.queue2.length > 0) {
        this.queue1.push(this.queue2.pop());
    }
    this.queue1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (this.empty()) {
        return -1;
    }
    while (this.queue1.length > 0) {
        this.queue2.push(this.queue1.pop());
    }
    return this.queue2.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    if (this.empty()) {
        return -1;
    }
    while (this.queue1.length > 0) {
        this.queue2.push(this.queue1.pop());
    }
    return this.queue2[this.queue2.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.queue1.length === 0 && this.queue2.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
