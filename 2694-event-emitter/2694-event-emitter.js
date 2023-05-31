class EventEmitter {
    constructor(){
        this.listeners ={};
    }
    subscribe(event, cb) {
    if(!this.listeners[event]){
      this.listeners[event] = [];
    }
    this.listeners[event].push(cb);

    return {
        unsubscribe: () => {
            this.listeners[event] = this.listeners[event].filter(listener => listener!== cb);
            if(this.listeners[event].length === 0){
                delete this.listeners[event];
            }
        }
    };
    }

    emit(event, args = []) {
        if (!(event in this.listeners)) return [];
        return this.listeners[event].map(listener => listener(...args));
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */