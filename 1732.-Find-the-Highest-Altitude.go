func largestAltitude(gain []int) int {
   maxAltitude := 0
   currentAltitude := 0
   for _, n := range gain {
    currentAltitude = currentAltitude + n
    if(currentAltitude > maxAltitude) {
        maxAltitude = currentAltitude
    }
   }
   return maxAltitude;
}
