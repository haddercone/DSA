//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let obj = new Solution();
        let res = obj.isPrime(n);
        console.log(res);
    }
}

// } Driver Code Ends


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