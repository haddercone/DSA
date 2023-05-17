/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function(functions, n) {
    let i = 0;
    const next = async () => {
        const fn = functions[i];
        i++;
        if(fn){
            await fn();
            return next();
        }
    }
    return Promise.all(Array(n).fill().map(next))
    
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */