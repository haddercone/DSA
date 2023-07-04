/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const n = nums.length;
    if(k>n){
        k = k %n;
    }
    const subArr = nums.splice(-k);
    
    for(let i=subArr.length-1;i>=0;i--){
        nums.unshift(subArr[i])
    }
    return nums;
};