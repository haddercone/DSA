/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // return nums.reduce((acc,curr) => acc^curr, 0) // using bitwise XOR
    
    
    // const uniquenumberSum = [...new Set(nums)].reduce((acc,curr) => acc+curr, 0);
    // const numsSum = nums.reduce((acc,curr) => acc+curr, 0);
    // return 2*uniquenumberSum - numsSum; // will get us the one number with the frequency of 1
    
    
    // nums.sort((a,b) => a-b);
    // for(let i=1;i<nums.length;i+=2){
    //     if(nums[i] !== nums[i-1]){
    //         return nums[i-1]
    //     }
    // }
    //  return nums[nums.length -1]
    
    
    const map ={}
    for(num of nums){
        map[num] = (map[num] || 0) + 1
    }
    for(const key in map){
        if(map[key] === 1){
            return key;
        }
    }
    
//     let map = new Map();
//     for(let i=0;i<nums.length;i++){
//         if(!map.has(nums[i])){
//             map.set(nums[i], 1)
//         } else {
//             let val = map.get(nums[i]);
//             val++;
//             map.set(nums[i], val)
//         }
//     }
//     for(let i=0;i<nums.length;i++){
//         if(map.get(nums[i]) === 1){
//             return nums[i];
//         }
//     }
};