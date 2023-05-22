/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function(object) {
    if (object === null) {
        return 'null';
    }
    
    if(Array.isArray(object)){
        const elements = object.map((ele) => jsonStringify(ele));
        const res = `[${elements.join(",")}]`
        return res;
    }
    if(typeof object === 'object'){
        const keys = Object.keys(object);
        const kvp = keys.map(key => `"${key}":${jsonStringify(object[key])}`);
        return `{${kvp.join(',')}}`
    }
    if(typeof object === 'string') {
        return `"${object}"`;
    }
    return String(object)
    
    
};