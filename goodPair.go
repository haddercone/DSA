func numIdenticalPairs(nums []int) int {
    var myMap map[int]int
    myMap = make(map[int]int)
    for _, num := range nums {
        if _, ok := myMap[num]; ok {
            myMap[num]++
        } else {
            myMap[num] = 1
        }
    }

    goodPairs := 0
    for _, freq := range myMap {
        goodPairs += (freq * (freq - 1)) / 2
    }
    return goodPairs
}
