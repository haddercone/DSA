/**
 * @param {Object} obj
 * @return {Object}
 */
var compactObject = function(obj) {
    if(Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);
    if(obj === null || typeof obj !== 'object') return obj;
    const result = {};
    for(const key in obj){
        const val = compactObject(obj[key]);
        if(Boolean(val)){
            result[key] = val;
        }
    }
    return result;
};