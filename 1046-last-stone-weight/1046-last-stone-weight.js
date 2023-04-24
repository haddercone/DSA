/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    // setting condition as > 1 since there is at most 1 stone left
    while(stones.length>1){
        // sort the array in descending order
        stones.sort((a,b) => b-a) // e.g. [2,1,3] => [3,2,1] 
        let diff = stones[0] - stones[1] // get the difference between 1 and 2 stones
        stones[1] = diff; // put difference on index 1
        stones.shift() // remove the largest stone
    }
    return stones[0];
    
};