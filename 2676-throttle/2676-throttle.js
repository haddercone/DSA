/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function(fn, t) {
    let timeoutId;
    let lastTimeExecuted = 0;
    return function(...args) {
        let currTime = Date.now();
        let elapsedTime = currTime - lastTimeExecuted;
        
        if(elapsedTime > t){
            fn.apply(this, args)
            lastTimeExecuted = currTime;
        } else {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                fn.apply(this, args);
                lastTimeExecuted = Date.now();
            }, t - elapsedTime);
        }
  }    
};

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */