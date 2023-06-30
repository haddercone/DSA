/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxNum = Math.max(...candies);
    
    // Approch 2 : using reduce
    const res = candies.reduce((acc, curr) => {
        let bool = (curr + extraCandies) >= maxNum ? true : false;
        acc.push(bool);
        return acc;
    }, []);
    
    return res;
    
    // Approch 1 : using loop
//     const res = [];
    
//     for(let i=0;i<candies.length;i++){
//         let maxCandies = candies[i] + extraCandies;
//         if(maxCandies >= maxNum){
//             res.push(true)
//         } else {
//             res.push(false)
//         }
//     }
//     return res;
};