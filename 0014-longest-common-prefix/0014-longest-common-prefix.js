/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // sort the array alphabetically
    strs.sort()
    let str1 = strs[0];
    let str2 = strs[strs.length-1];
    let i = 0
    let commonPrefix = '';
    
    while(i < str1.length && i<str2.length){
        if(str1[i] !== str2[i]) {
            break;   
        }
        commonPrefix += str1[i];
        i++;
        
    }
    return commonPrefix;
};