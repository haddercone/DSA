/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = -Infinity;
    let currSum = 0;
    let n = nums.length;
    for(let i=0;i<n;i++){
        currSum += nums[i];
        
        if(currSum > maxSum){
            maxSum = currSum;
        }
        if(currSum < 0){
            currSum = 0;
        }
    }
    return maxSum;
};