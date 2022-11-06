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
    let dp = new Array();
    dp.push(BigInt(0));
    dp.push(BigInt(1));
    dp.push(BigInt(1));
    for(let i=4;i<=100;i++)
    {
        dp.push(BigInt(0));
    }
    
    let t = parseInt(readLine());
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split();
        let N = BigInt(input_line[0]);
        let obj = new Solution();
        let ans = obj.printFibb(N, dp);
        let s = "";
        for(let j=0;j<ans.length;j++)
        {
            s+=ans[j];
            s+=" ";
        }
        console.log(s);
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {BigInt} N
 * @returns {BigInt[]} 
*/
class Solution
{
    //Function to return list containing first n fibonacci numbers.
    printFibb(N)
    {
        // code here
        // ----------------iterative approach-----------------//
        
        let a = BigInt(0);
        let b = BigInt(1);
        let arr = []
        if(N <1){
            return arr;
        }
        for(let i = 0;i<N;i++){
            arr.push(b)
            let temp = a + b;
            a = b;
            b = temp;
        }
        return arr;
    }
}