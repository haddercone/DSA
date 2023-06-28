
var RandomizedSet = function() {
     this.map = new Map()
    this.arr = []
   
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(!this.map.has(val)){
        this.map.set(val, this.arr.length)
        this.arr.push(val)
        return true;
    }
    return false;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.map.has(val)){
        const index = this.map.get(val);
        this.map.delete(val)
        if(index !== this.arr.length-1){
            const temp = this.arr[this.arr.length -1];
            this.arr[index] = temp;
            this.map.set(temp, index)
        } 
        this.arr.pop();
        return true;
    }
    return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let randomIndex = Math.floor(Math.random() * this.arr.length);
    return this.arr[randomIndex];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */