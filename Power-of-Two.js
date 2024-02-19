/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    const res = Math.log2(n);
    return Number.isInteger(res);
};
