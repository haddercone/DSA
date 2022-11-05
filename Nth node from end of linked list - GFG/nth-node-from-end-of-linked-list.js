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

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar0 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar0[0];
        let k = input_ar0[1];
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let head = new Node(input_ar1[0]);
        let tail = head;
        for(let i=1;i<n;i++){
            tail.next = new Node(input_ar1[i]);
            tail = tail.next;
        }
        let obj = new Solution();
        console.log(obj.getNthFromLast(head, k));
        
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {Node} head
 * @param {number} n
 * @returns {number}
*/

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    //Function to find the data of nth node from the end of a linked list
    getNthFromLast(head, n)
    {
        //your code here
        let slowHead = head;
        let fastHead = head;
        let counter = 1;
        
        if (head !== null){
            while(counter<=n){
                if(fastHead === null){
                    return -1;
                }
                fastHead = fastHead.next;
                counter++;
            }    
        }
        while(fastHead !== null){
            slowHead = slowHead.next;
            fastHead = fastHead.next;
        }
        return slowHead.data;
    }
    
}