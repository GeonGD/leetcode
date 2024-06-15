class FrontMiddleBackQueue {

    constructor(arr) {
        this.arr = arr || []
    }

    pushFront(val) {
       this.arr.unshift(val) 
    }

    pushMiddle(val) {
        const position = Math.floor(this.arr.length / 2);
        this.arr.splice(position, 0, val)
    }

    pushBack(val) {
        this.arr.push(val)
    }

    popFront() {
        return this.arr.shift() ?? -1
    }

    popMiddle() {
        const position = Math.ceil(this.arr.length / 2) - 1;
        const res = this.arr.splice(position, 1)
        return res.length ? res[0] : -1
    }

    popBack() {
        return this.arr.pop() ?? -1
    }
}

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */