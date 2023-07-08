/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let countOnes = 0;
    let maxCount = 0;
    if(nums.length === 1){
        return nums[0];
    }
    
    for(let i=0;i<nums.length;i++){
        if(nums[i] === 1){
            countOnes++;
            if(maxCount < countOnes) maxCount = countOnes;
        } else {
            countOnes = 0;
        }
    }
    return maxCount;
    
};