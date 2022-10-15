//User function Template for javascript

/**
 * @param {number} n
 * @return {number}
*/

class Solution {

    isPrime(n){
        
        
        if (n === 0){
            return -1;
        }
        else if (n ==1){
            return 0;
        }
        else{
            let mid = parseInt(Math.sqrt(n))
            for(let i = 2; i<=mid; i++){
                if(n%i === 0){
                    return 0;
                }
            }
            return 1;
        }
        
    }
}
