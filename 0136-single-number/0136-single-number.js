/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // nums.sort((a,b) => a-b);
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        if(!map.has(nums[i])){
            map.set(nums[i], 1)
        } else {
            let val = map.get(nums[i]);
            val++;
            map.set(nums[i], val)
        }
        
    }
    for(let i=0;i<nums.length;i++){
        if(map.get(nums[i]) === 1){
            return nums[i];
        }
    }
};