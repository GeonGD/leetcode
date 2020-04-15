//栈是一种遵从后进先出(LIFO)原则的有序集合。新添加或待删除的元素都保存在栈的同一端，称作栈顶，另一端就叫栈底。在栈里，新元素都靠近栈顶，旧元素都接近栈底
export default class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }

    size() {
        return this.count;
    }

    // 向栈中添加元素
    push(element) {
        this.items[this.count] = element;
        this.count++;
    }

    // 从栈中移除元素
    pop() {
        if (this.isEmpty()) {
            return -1;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.item[this.count];
        return result;
    }

    // 查看栈顶元素
    peek() {
        if (this.isEmpty()) {
            return -1;
        }
        return this.items[this.count - 1];
    }

    // 检测栈是否为空
    isEmpty() {
        return this.count === 0;
    }

    // 清空栈
    clear() {
        while (this.count) {
            this.pop();
        }
    }

    toString() {
        if (this.isEmpty()) {
            return "";
        }
        let objString = `${this.items[0]}`;
        for (let i = 1; i < this.count ; i++) {
            objString = `${objString}, ${this.item[i]}`;
        }
        return objString;
    }
}

// 栈应用 进制转换 二进制
const decimalToBinary = (decNumber) => {
    const remStack = new Stack();
    let number = decNumber;
    let rem;
    let binaryString = "";

    while (number > 0) {
        rem = Math.floor(number % 2);
        remStack.push(rem);
        number = Math.floor(number / 2);
    }

    while (!remStack.isEmpty()) {
        binaryString += remStack.pop().toString();
    }

    return binaryString;
};

// 2-36位进制转换
const baseConverter = (decNumber, base) => {
    const remStack = new Stack();
    const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let number = decNumber;
    let rem;
    let binaryString = "";

    if (base < 2 || base > 36) {
        return "";
    }

    while (number > 0) {
        rem = Math.floor(number % base);
        remStack.push(rem);
        number = Math.floor(number / base);
    }

    while (!remStack.isEmpty()) {
        binaryString += digits[remStack.pop()];
    }

    return binaryString;
};

console.log(decimalToBinary(2));
console.log(baseConverter(2363, 16));