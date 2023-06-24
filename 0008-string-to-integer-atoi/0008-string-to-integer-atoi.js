/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim();
    if(s.length === 0) return 0;
    
    let num = 0;
    let sign = 1;
    let i = 0;
    
    if(s[i] === "+") {
        i++;
    }else if(s[i] === "-") {
        i++;
        sign = -1;
    }
    
    while(i< s.length && s[i]>= "0" && s[i] <= "9" ){
        num = num*10 + parseInt(s[i])
        i++;
    }
    
    num*=sign;
    
    num = Math.max(Math.min(num, Math.pow(2, 31) - 1), -Math.pow(2, 31)); 
    return num;
    
    
};