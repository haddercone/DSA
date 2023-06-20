/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length < 1) return s.length;
    let maxCount = 1;
    for(let i=0;i<s.length;i++){
        let count = 1;
        let set = new Set();
        for(let j=i+1;j<s.length;j++){
            if(s[j] === s[i] || set.has(s[j])) break;
            set.add(s[j])
            count++;
            if(count >= maxCount){
                maxCount = count;
            }            
        }
    }
    return maxCount;
    
    
    
};