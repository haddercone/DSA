class Calculator {
  
    /** 
     * @param {number} value
     */
	constructor(value) {
		this.value = value;
	}

    /** 
     * @param {number} value
     * @return {Calculator}
     */
	add(value){
		this.value+=value
        return this;
	}

    /** 
     * @param {number} value
     * @return {Calculator}
     */
	subtract(value){
		this.value-=value;
        return this;
	}

    /** 
     * @param {number} value
     * @return {Calculator}
     */  
	multiply(value) {
		this.value *= value;
        return this;
	}

    /** 
     * @param {number} value
     * @return {Calculator}
     */
	divide(value) {
        if(value === 0) {
            this.value = "Division by zero is not allowed"
            return this;
        } else {
            this.value /= value
            return this;
        }
	}
  
    /** 
     * @param {number} value
     * @return {Calculator}
     */
	power(value) {
		this.value = Math.pow(this.value, value)
        return this;
	}
    
    /** 
     * @return {number}
     */
	getResult() {
		return this.value;
	}
}