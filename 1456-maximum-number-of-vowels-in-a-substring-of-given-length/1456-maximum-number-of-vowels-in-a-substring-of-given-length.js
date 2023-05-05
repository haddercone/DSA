/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let set = new Set(["a","e","i","o","u"]);
    let mvc = 0; // max vowel counts 
    let wvc = 0; // vowel counts in a window
    
    for(let i=0;i<k;i++){
        if(set.has(s[i])){
            wvc++;
        }
    }
    
    mvc = wvc;
    
    for(i=k;i<s.length;i++){
        if(set.has(s[i])){
            wvc++;
        }
        if(set.has(s[i-k])){
            wvc--;
        }
        mvc = Math.max(mvc, wvc)
    }
        
    return mvc;
};