/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let k = 0; // number of break-points in the array
    let n = nums.length;
	
    for(let i=0;i<n;i++){
        if(nums[i] > nums[(i+1) % n]) k++; // increase the number of break-points if greater than the next value;
		// i.e in the following array:
		// [5,6,9,1,2], there is only one break-point at [9,1] 
    }
    return k<=1; // if break points are greater than 1 that means array is not sorted 
				// hence return false else return true
    
};
