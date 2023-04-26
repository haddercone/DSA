/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let newList = new ListNode();
    let ptr = newList;
    let sum = 0;
    if(l1 === null && l2 === null){
        return 0;
    }
    if(l1 === null){
        return l2
    }
    if(l2 === null){
       return l1
    }
    
    while(l1 || l2){
        if(l1 && l2){
            sum += l1.val + l2.val;
        } else if(l1){
            sum+=l1.val;
        } else {
            sum+=l2.val;
        }
        
        if(sum > 9){
            let rem = sum%10;
            newList.next = new ListNode(rem);
        } else {
            newList.next = new ListNode(sum);
        }
        
        sum = parseInt(sum/10);
        newList = newList.next;
        
        if(l1 && l2){
            l1 = l1.next;
            l2 = l2.next;
        } else if(l1){
            l1 = l1.next
        } else {
            l2 = l2.next;
        }

    }
    if(sum !== 0){
        newList.next = new ListNode(sum)
        newList = newList.next;
    }
    return ptr.next;
};