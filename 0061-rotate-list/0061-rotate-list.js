/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (head === null) return null;
    let listLength = 0;
    let temp = head;
    if (k === 0) return head;
    // get array length
    while(temp){
        temp = temp.next;
        listLength++;
    }
    
    // if only single node return head itself
    if(listLength === 1) return head; 
    
    let minrotations = k%listLength; // get the minimum number of nodes to rotate to get the same sequence
    /* For example: 
        For a linked list 1 -> 2 -> 3 -> null.
        Here the length is 3
        1. For the 1 roation:
            - minroation will be :k=1,  1%3 = 1 e.g  3 -> 1 -> 2 -> null.
        2. For the 2 roation:
            - minroation will be :k=2,  2%3 = 2 e.g  2 -> 3 -> 1 -> null.
        3. For the 3 roation:
            - minroation will be :k=3,  3%3 = 0 e.g  1 -> 2 -> 3 -> null.
        4. For the 4 roation:
            - minroation will be :k=4,  4%3 = 1 e.g  3 -> 1 -> 2 -> null. 
        5. For the 5 roation:
            - minroation will be :k=5,  5%3 = 2 e.g  2 -> 3 -> 1 -> null. 
        Here after the 3 rotations we are getting the same minroation sequence;
        
    */
    // if we get the same number of rotations as of the length of the list , we'll receive the same list again
    if (minrotations === 0) return head;
    
    // here we'll get the node, from where we need to break the  list
    let nodeToVisit = listLength - minrotations;
    
    let p1 = head; 
    let p2 = head.next;
    let count = 1
    
    // loop over until we get to the node
    while(count < nodeToVisit){
        p1 = p1.next;
        p2=p2.next;
        count++;
        
    }
    let resNode = p2; 
    p1.next = null; // break the link from the node
    
    // add the remaining  list to the head of the previous list
    while(p2){
        if(p2.next === null) {
            p2.next = head;
            break;
        }
        p2 = p2.next;
    }
    
    return resNode;
    
    
    
    
    
    

    
};