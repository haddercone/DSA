
var SmallestInfiniteSet = function() {
    this.set = Array(1000).fill(1)
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    /**
    Flow of the code: 
        get index of minimum number;
        set value at the index to 0. e.g. 
        return the increamented value;
    E.g: 
        For 1: 
            - the minNumberIndex will be 0
            - set 0 at that index 0
            - return minNumberIndex + 1 // 0+1 = 2 --> min value
        
        For 2:
        - the minNumberIndex will be 1 (since the value at index 0 is 0 ( for 1 we replced 1 with 0) , findIndex will return the index of non-zero value i.e index = 1 )
        - set 0 at at index 1
        - return minNumberIndex + 1 // 1+1 = 2 --> min value
        
    **/
    
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