/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    // Approach 1
    // // get digit sum
    // let sum = num.toString().split("").reduce((acc, curr) => Number(acc) + Number(curr), 0);
    // // check if sum is less than 0
    // if(sum < 10) return sum;
    // return addDigits(sum); // call addDigit again
    
    // Approach 2:
    return 1 + (num - 1) % 9;
};