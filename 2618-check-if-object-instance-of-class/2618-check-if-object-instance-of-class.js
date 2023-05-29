/**
 * @param {any} object
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    if(obj === null || obj === undefined || typeof classFunction !== "function"){
        return false
    }
    
    let currentPrototype = obj.__proto__;
    
    while(currentPrototype !== null){
        if(currentPrototype === classFunction.prototype) return true;
        currentPrototype = currentPrototype.__proto__;
    }
    return false;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */