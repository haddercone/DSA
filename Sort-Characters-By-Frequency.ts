function frequencySort(s: string): string {
    const count: { [key: string]: number } = {};
    for (const char of s) {
        count[char] = count[char] + 1 || 1;
    }

    const sortedByFrequencies : string = Object.entries(count)
                                            .sort((a,b) => b[1] - a[1])
                                            .map(ele => ele[0].repeat(ele[1]))
                                            .join("");
    return sortedByFrequencies;

};
