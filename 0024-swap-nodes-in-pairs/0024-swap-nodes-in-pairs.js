/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let p1 = head;
    while(p1 && p1.next){
        [p1.val, p1.next.val] = [p1.next.val, p1.val];
        p1 = p1.next.next;
    }
    return head;
};