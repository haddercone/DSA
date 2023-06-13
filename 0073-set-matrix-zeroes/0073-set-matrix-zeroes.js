/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let rows = [];
    let cols = [];
    let m = matrix.length;
    let n = matrix[0].length;
    // get indexes of 0s
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(matrix[i][j] === 0){
                rows.push(i)
                cols.push(j)
            }
        }
    }
    
    while(rows.length > 0){
        let row = rows.shift();
        matrix[row] = matrix[row].fill(0);
    }
    
    while(cols.length > 0){
        let col = cols.shift();
        for(let i=0;i<m;i++){
            matrix[i][col] = 0;
        }
    }
    
    return matrix;
};