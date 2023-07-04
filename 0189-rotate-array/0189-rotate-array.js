/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const n = nums.length;
    k = k % n;
    swap(nums, 0, n-1);
    swap(nums, 0, k-1);
    swap(nums, k, n-1);
    return nums;
    
    function swap(nums, i, j){
    while(i<j){
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j--;
    }
}
    
//     const n = nums.length;
    
//     if(k>n){
//         k = k % n; 
//     }
    
//     const subArr = nums.splice(-k); // get last k elements
    
//     for(let i=subArr.length-1;i>=0;i--){
//         nums.unshift(subArr[i])
//     }
//     return nums;
    
    // const n = nums.length;
    //
    // const temp = new Array(n).fill(0);
    // for(let i=0;i<n;i++){
    //     temp[(i+k)%n] = nums[i]
    // }
    // for(let j=0;j<n;j++){
    //     nums[j] = temp[j]
    // }
    // return nums;
};
