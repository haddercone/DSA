/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let goodPairas=0;
    const n = nums.length;
    for(let i=0;i<n;i++){
        for(let j=1;j<n;j++){
            if(nums[i] === nums[j] && i<j){
                goodPairas++;
            }
        }
    }
    return goodPairas;
};