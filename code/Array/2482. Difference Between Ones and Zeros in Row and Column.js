/**
 * https://leetcode.com/problems/difference-between-ones-and-zeros-in-row-and-column
 * @param {*} grid
 * @returns
 */
function onesMinusZeros(grid) {
    var onesRow = new Array(grid.length).fill(0);
    var onesCol = new Array(grid[0].length).fill(0);
    var m = grid.length;
    var n = grid[0].length;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0;  j < grid[0].length; j++) {
            if (grid[i][j] === 1) {
                onesRow[i]++;
                onesCol[j]++;
            }
        }
    }
    console.log(onesRow, onesCol)
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[0].length; j++) {
            grid[i][j] = 2 * onesRow[i] - m + 2 * onesCol[j] - n;
        }
    }
    return grid;
}
