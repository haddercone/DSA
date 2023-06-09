/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let flag = false;
    let ans = letters[0]
    
    for(let i=0;i<letters.length;i++){
        if(letters[i] > target) {
            flag = true;
            ans = letters[i]
            break;
        }
    }
    
    return ans;
};