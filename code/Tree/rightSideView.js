function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const rightSideView = function (root) {
    if (root === null) {
        return [];
    }
    let arr = [];
    let res = [];
    arr.push(root);

    while (arr.length > 0) {
        res.push(arr[arr.length - 1].val);
        let len = arr.length;
        while (len > 0) {
            let now = arr.shift();
            if (now.left !== null) {
                arr.push(now.left);
            }
            if (now.right !== null) {
                arr.push(now.right);
            }
            len--;
        }
    }
    return res;
};

export default rightSideView;
