/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    let map = {};
    
    if(s.length != t.length) return false;
    
    // create a map containing character frequency in s
    for(let i =0; i< s.length;i++){
        if(map[s[i]]) map[s[i]]++;
        else{
            map[s[i]] = 1;
        }
    }
    
    // reduce the character frequecy , when character is encountered;
    for(let j =0; j<t.length;j++){
        if(map[t[j]]) map[t[j]]--;
    }

    return Object.values(map).reduce((a,b) => a + b) > 0 ? false : true;


    
};