/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    let chunkedArr = []
    let i = 0;
    
    while(i < arr.length){
        const chunk = arr.slice(i, size + i);
        chunkedArr.push(chunk);
        i+=size
    }
    return chunkedArr;
    
    
    
};
