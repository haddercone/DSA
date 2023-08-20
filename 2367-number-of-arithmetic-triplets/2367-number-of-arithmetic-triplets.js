/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let count = 0
    
    // TC: O(n^3)
    // SC: O(1)
    
    // for(let i=0;i<nums.length;i++){
    //     for(let j=i;j<nums.length;j++){
    //         for(let k=j;k<nums.length;k++){
    //             if(nums[k]-nums[j] === diff && nums[j]-nums[i] === diff) count++;
    //         }
    //     }
    // }
    
    
    // TC: O(n)
    // SC: O(n)
    
    let set = new Set();
    for(const num of nums){
        if(set.has(num-diff) && set.has(num-2*diff)) count++;
        set.add(num)
    }
    
    return count;
};