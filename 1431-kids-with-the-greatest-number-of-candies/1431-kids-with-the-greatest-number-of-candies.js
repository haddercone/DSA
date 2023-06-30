/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxNum = Math.max(...candies);
    const res = [];
    
    for(let i=0;i<candies.length;i++){
        let maxCandies = candies[i] + extraCandies;
        if(maxCandies >= maxNum){
            res.push(true)
        } else {
            res.push(false)
        }
    }
    return res;
};