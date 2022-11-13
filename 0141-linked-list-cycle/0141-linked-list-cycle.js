/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let current = head;
    let set = new Set()
    let pos = -1;
    if(head === null && pos){
        return false ;
    }
    
    while(current){
        if(set.has(current)){
            return true
        }
        set.add(current)
        current = current.next;
    }
    return false;
    
};