/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for(let i=digits.length-1;i>=0;i--){
        if(digits[i] < 9){
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    digits = new Array(digits.length + 1).fill(0)
    digits[0] = 1
    return digits;
    
    // let BigNum = BigInt(digits.join(""))
    // let sum = BigNum + 1n;
    // return String(sum).split("")
    
};