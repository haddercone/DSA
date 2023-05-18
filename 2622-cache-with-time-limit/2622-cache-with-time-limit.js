
var TimeLimitedCache = function() {
    // this.cache = {};
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    
    let keyExist = this.cache.get(key);
    if(keyExist){
        clearTimeout(keyExist.timer)
    }
    const timer = setTimeout(() => this.cache.delete(key), duration)
    this.cache.set(key, {value, timer})
    return Boolean(keyExist)
    
//     const currTime = Date.now();
    
//     // if key is accessible and un-expired then overide the values with the current values
//     if(this.cache[key] && this.cache[key].expire > currTime ){
//         this.cache[key].value = value;
//         this.cache[key].expire = duration + currTime;
//         return true;
//     } else {
//         // if key is un-accessible and expired put the values
//         this.cache[key] = {
//             value : value,
//             expire : duration + currTime
//         }
//     }
//     return false;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    return this.cache.has(key) ? this.cache.get(key).value : -1;
    
    // const currTime = Date.now();
    // // return value if key is un-expired and accessible
    // if(this.cache[key] && this.cache[key].expire > currTime){
    //     return this.cache[key].value;
    // } else {
    //     return -1;
    // }
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.cache.size;
//     let count = 0;
//     const currTime = Date.now();
    
//     for(const key in this.cache){
//         if(this.cache[key].expire > currTime) count++;
//     }
//     return count;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */