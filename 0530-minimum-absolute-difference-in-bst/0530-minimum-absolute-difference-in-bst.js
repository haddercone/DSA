/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let arr = [];
    const inorder = (root) => {
        if(!root) return;
        inorder(root.left);
        arr.push(root.val);
        inorder(root.right)
    }
    inorder(root);
    
    let min = Math.abs(arr[0] - arr[1]);
    for(let i=2;i<arr.length;i++){
        min = Math.abs(Math.min(min, arr[i]- arr[i-1]))
    }
    return min;
    
};
