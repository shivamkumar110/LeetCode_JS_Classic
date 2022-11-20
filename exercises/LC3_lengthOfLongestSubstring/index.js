// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(s) {
    let windowStart= 0;
    let maxLength = 1;
    let indexMap= {}
    for(let currentIndex= 0; currentIndex < s.length; currentIndex++) {
        //assuming this index as our end of Window(substring)
        endChar = s[currentIndex]
        // only update the length of window when the map already has that char and 
        if(indexMap.hasOwnProperty(endChar) ) {
            //shift start to currentPosition in Map + 1
            windowStart = indexMap[s[currentIndex]] + 1
        }
        indexMap[endChar] = currentIndex
        maxLength = Math.max(maxLength, currentIndex - windowStart + 1)
    }
   
    return maxLength
}

module.exports = lengthOfLongestSubstring;
