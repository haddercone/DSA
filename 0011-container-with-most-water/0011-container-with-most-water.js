/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let area = 0;
    let left = 0 ;
    let right=height.length-1;
    while(left <right){
        let b = right-left;
        let h = Math.min(height[right], height[left]);
        let waterArea = b*h;
        if(waterArea > area){
            area = waterArea;
        }
        if(height[left] < height[right]){
            left++;
        } else {
            right--;
        }

    }
    return area;
    
};