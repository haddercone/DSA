/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */

var flat = function (arr, n) {
    if (n === 0) return arr;
    let  flattenArr = [];
    
    for(const i of arr){
        if(Array.isArray(i)){
            flattenArr.push(...flat(i, n-1))
        } else {
            flattenArr.push(i)          
        }
    }
    return flattenArr;
};