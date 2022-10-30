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

let head = null;

function findNode(head, search_for)
{
    let current = head;
    while (current !== null)
    {
        if (current.data == search_for)
            break;
        current = current.next;
    }
    return current;
}

function printlist(head){
    let current = head; 
    let s='';
    while (current !== null)
    {
        s+=current.data;
        current = current.next;
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let s = readLine();
        head = new Node(s[0]-'0');
        let tail = head;
        for(let i=1;i<s.length;i++){
            tail.next = new Node(s[i]-'0');
            tail = tail.next;
        }
        let obj = new Solution();
        let newHead = obj.addOne(head);
        printlist(newHead);
        
    }
}


// } Driver Code Ends


//User function Template for javascript

/**
 * @param {Node} node
 * @return {Node} node
*/


/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let head;
This is method only submission.
You only need to complete the below method.
*/

class Solution {
    addOne(node)
    {
        //your code here
        let temp = node;
        let data = ''
        
        while(temp !== null){
            data += temp.data
            temp = temp.next
        }
        let res = BigInt(data) + BigInt('1');
        return new Node(res);
    }
}
