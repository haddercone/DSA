/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let sum = num.toString().split("").reduce((acc, curr) => Number(acc) + Number(curr), 0);
    if(sum < 10) return sum;
    return addDigits(sum);
    
    
};