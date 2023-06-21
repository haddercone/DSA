/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // SC = O(n)
    // TC =  O(n)
    const map = new Map();
    let string = "";
    let maxLength=0;
    for(let i=0;i<s.length;i++){
        let char = s[i];
        if(!map.has(char)){
            map.set(char,i);
            string+=s[i];
            if(string.length > maxLength){
                maxLength = string.length;
            }
        } else {
            i = map.get(char);
            string="";
            map.clear();
        }
    }
    return maxLength;
    
    
    // SC = O(k), k=numberof unique characters in string
    // TC =  O(n^2)
    
//     if(s.length < 1) return s.length;
//     let maxCount = 1;
//     for(let i=0;i<s.length;i++){
//         let count = 1;
//         let set = new Set();
//         for(let j=i+1;j<s.length;j++){
//             if(s[j] === s[i] || set.has(s[j])) break;
//             set.add(s[j])
//             count++;
//             if(count >= maxCount){
//                 maxCount = count;
//             }            
//         }
//         delete set;
//     }
//     return maxCount;
    
    
    
};