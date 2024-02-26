function singleNumber(nums: number[]): number[] {
    const resultSet = new Set<number>();
    for(let num of nums) {
        if(resultSet.has(num)){
            resultSet.delete(num)
        } else {
            resultSet.add(num);
        }
    }
    return [...resultSet];
  
    // another way using maps
  
    // const count : {[key:number] : number} = {};
    // let result : number[] = []; 
    // for(let num of nums) {
    //     count[num] = count[num] + 1 || 1;
    // }

    // for(const [key, value] of Object.entries(count)) {
    //     if(value === 1) {
    //         result.push(+key)
    //     }
    // }
    // return result;

};
