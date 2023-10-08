/**
 * @param {string} s
 * @return {string}
 */
function isPalindrom(string, s,e){
        while(s <= e){
            if(string[s] !== string[e]){
                return false;
            }
            s++;
            e--;
        }
        return true;
    }

var longestPalindrome = function(s) {
    let longestPalindrom = "";
    let n = s.length;
    for(let i=0;i<n;i++){
        for(let j=n-1;j>=0;j--){
            if(s[i] === s[j]){
                let string = s.slice(i,j+1);
                if(isPalindrom(s, i, j) && string.length > longestPalindrom.length){
                    longestPalindrom = string;
                }
            }
        }
    }
    return longestPalindrom; 
};