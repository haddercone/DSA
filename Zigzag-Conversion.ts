function convert(s: string, numRows: number): string {
    if( numRows <=1 ) {
        return s;
    }
    const zigzagarr : string[] = Array(numRows).fill("");
    let down = true;
    let row = 0, i:number;
    for(i=0; i < s.length; i++) {
        zigzagarr[row] += s[i];
        if(row === 0) {
            down = true;
        }
        if(row === numRows-1) {
            down = false;
        }

        down ? row++ : row--;
    }

    return zigzagarr.join("");
};
