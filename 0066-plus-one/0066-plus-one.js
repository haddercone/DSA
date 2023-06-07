/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let BigNum = BigInt(digits.join(""))
    let sum = BigNum + 1n;
    return String(sum).split("")
    
};