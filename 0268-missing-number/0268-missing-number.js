/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length;
    const rangeSum = Math.floor(n*(n+1)/2);
    let numsSum = 0;
    
    for(let i=0;i<n;i++){
        numsSum +=nums[i]
    }
    
    return rangeSum - numsSum;
};