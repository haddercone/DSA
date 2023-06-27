/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    return nums.map((ele, i) => ele=nums[nums[i]])
};