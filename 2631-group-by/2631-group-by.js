/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    const res = {}
    for (const i of this){
        const key = fn(i)
        if(key in res){
            res[key].push(i);
        } else {
            res[key] = [i];
        }
    }
    return res;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */