/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
    if (grid.length === 0 || grid[0].length === 0) {
        return 0;
    }
    let count = 0;
    function findIslandSlibings(i, j) {
        grid[i][j] = 0; // 先拿掉当前的岛屿
        if (grid[i][j + 1] === 1) {
            findIslandSlibings(i, j + 1);
        }
        if (grid[i][j - 1] === 1) {
            findIslandSlibings(i, j - 1);
        }
        if (grid[i - 1] && grid[i - 1][j] === 1) {
            findIslandSlibings(i - 1, j);
        }
        if (grid[i + 1] && grid[i + 1][j] === 1) {
            findIslandSlibings(i + 1, j);
        }
    }
    for (let i = 0, len = grid.length; i < len; i++) {
        // eslint-disable-next-line no-shadow
        for (let j = 0, len = grid[0].length; j < len; j++) {
            if (grid[i][j] !== 0) {
                count++;
                findIslandSlibings(i, j);
            }
        }
    }
    return count;
};

export default numIslands;
