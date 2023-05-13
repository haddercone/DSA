/**
 * @param {Function} fn
 */
function memoize(fn) {
    let map = {}
    return function(...args) {
        let arg = JSON.stringify(args);
        if(arg in map) return map[arg];
        else{
            map[arg] = fn(...args)
        }
        return map[arg];
        
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */