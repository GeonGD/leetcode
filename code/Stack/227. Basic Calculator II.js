/**
 * https://leetcode.com/problems/basic-calculator-ii/description/
 */
function calculate(s) {
    let numberStack = [];
    let num = 0
    let sign = '+';
    for(let i = 0; i < s.length; i++) {
        let str = s[i]
        // 是数字
        if (!isNaN(parseInt(str))) {
            num = num * 10 + parseInt(str);
        }
        // 操作符
        if ((isNaN(parseInt(str)) && str !== ' ') || i === s.length - 1) {
            switch(sign) { 
                case '+':
                    numberStack.push(num);
                    break;
                case '-':
                    numberStack.push(-num);
                    break;
                case '*' :
                    numberStack.push(numberStack.pop() * num);
                    break;
                case '/':
                    // Math.trunc取浮点的整数部分
                    numberStack.push(Math.trunc(numberStack.pop() / num)); 
                    break;
            }
            sign = str;
            num = 0
        }
    }
    let sum = 0
    while(numberStack.length) {
        sum += numberStack.pop()
    }
    return sum;
};

calculate("3+2*2");
calculate(" 3/2 ")
calculate(" 3+5 / 2 ");
calculate('2048');
calculate("14-3/2");