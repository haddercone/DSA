/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let X = 0;
    for(let i=0;i<operations.length;i++){
        let op = operations[i];
        if(op === "++X" || op === "X++") X++;
        if(op === "--X" || op === "X--") X--
    }
    return X;
};