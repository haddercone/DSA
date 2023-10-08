class Solution {
public:
    string convert(string s, int numRows) {
    if (numRows == 1 || numRows >= s.length()) {
        return s;
    }
    
    vector<string> rows(min(numRows, int(s.size())));
    int rowIndex = 0;
    bool goingDown = false;
    
    for (char c : s) {
        rows[rowIndex] += c;
        if (rowIndex == 0 || rowIndex == numRows - 1) {
            goingDown = !goingDown;
        }
        rowIndex += goingDown ? 1 : -1;
    }
    
    string result;
    for (string row : rows) {
        result += row;
    }
    
    return result;
}

};