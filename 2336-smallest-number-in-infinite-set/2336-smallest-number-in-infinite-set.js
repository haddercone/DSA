
var SmallestInfiniteSet = function() {
    this.set = Array(1000).fill(1)
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    let minNumberIndex = this.set.findIndex(a => a); // 
    this.set[minNumberIndex] = 0; // 
    return minNumberIndex + 1; // return the index + 1 value
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    this.set[num-1] = 1; // put the value back at it's index;
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */