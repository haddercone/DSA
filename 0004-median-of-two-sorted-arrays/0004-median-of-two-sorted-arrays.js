/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const newArr = [...nums1, ...nums2].sort((a,b) => a-b);
    let mid = Math.floor(newArr.length/2);
    if(newArr.length%2 === 0) return ((newArr[mid] + newArr[mid-1])/2).toFixed(5);
    return newArr[mid];
};