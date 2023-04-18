/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let mergeString = ''
    const longWord = word1.length > word2.length ? word1 : word2;
    for(let i=0;i<longWord.length;i++){
        if(i < word1.length) mergeString += word1[i]; 
        if(i < word2.length) mergeString += word2[i]
    }
    return mergeString;
};