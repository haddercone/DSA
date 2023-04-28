/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reverseNum = +String(Math.abs(x)).split("").reverse().join(""); // get reversed Number
    // compare with 32 bit signed integer
    if(reverseNum > 0x7FFFFFFF) return 0;
    
    return x < 0 ? -reverseNum : reverseNum;
};