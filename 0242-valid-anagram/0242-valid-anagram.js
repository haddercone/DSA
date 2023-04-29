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
        if(map[s[i]]) map[s[i]]++; // increase character frequency when character is already present 
        else{
            map[s[i]] = 1; // add character to 1 if not present in map
        }
    }
    
    // reduce the character frequecy , when character is encountered in t;
    for(let j =0; j<t.length;j++){
        if(!map[t[j]]){
            return false;
        }
        map[t[j]]--;
    }
    
    return true;

    
};