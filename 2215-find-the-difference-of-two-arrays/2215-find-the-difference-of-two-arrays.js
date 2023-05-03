/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let setNums1 = new Set(nums1);
    let setNums2 = new Set(nums2);
    
    let diff1 = [...new Set([...setNums1].filter(x => !setNums2.has(x)))];
    let diff2 = [...new Set([...setNums2].filter(x => !setNums1.has(x)))];
    
    return [diff1, diff2];
};