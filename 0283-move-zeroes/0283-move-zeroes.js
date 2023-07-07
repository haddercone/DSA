/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0;
    const n = nums.length;
    for(let j = 1; j<n;j++){
        if(nums[i] !== 0) i++;
        else if(nums[i] === 0 && nums[j] !== 0){
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++;
        }
    }
    return nums;
};