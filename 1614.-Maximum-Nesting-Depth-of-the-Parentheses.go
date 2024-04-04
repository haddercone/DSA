func maxDepth(s string) int {
    depth := 0
    currentdepth :=0
    for _, char := range s {
        if char == '(' {
            currentdepth++
            if currentdepth > depth {
                depth = currentdepth
            }
        }
        if char == ')' {
            currentdepth--
        }
    }
    return depth

    
}
