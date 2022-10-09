/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/

class Solution{
    print2largest(arr,n){
        let newSet = [...new Set(arr)].sort((a,b) => a-b)
        if (newSet.length === 1){
            return -1
        }
        else {
            return newSet[newSet.length-2]
        }
    }
}
