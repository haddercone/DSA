/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    let num = -1;
    let arr = s.split(" ")
    const numsArr = []
    for(let i=0;i<arr.length;i++){
        if(parseInt(arr[i])){
            numsArr.push(parseInt(arr[i]));
        }
    }
    
    for(let i=1;i<numsArr.length;i++){
        if(numsArr[i-1] >= numsArr[i]) return false;
    }
    
    return true;
};