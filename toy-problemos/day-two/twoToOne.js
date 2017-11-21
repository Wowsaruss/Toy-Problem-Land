// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2.
// #Examples: ``` a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz" longest(a, a) -> "abcdefghijklmnopqrstuvwxyz" 

// Clarify
// Take two strings of letters and combine and sort them into the alphabet

// Example Data
// 'erfybwoervhe', 'rnpewrf' = 'befhnoprvwy'

// Psudo Code
// function(str, str) -> sorted string
// ...
// sort()
// for loop
// 

// Code
function longest(s1, s2) {
    var arr = [...s1, ...s2].sort();
    var uniqueArray = arr.filter(function(elem, pos) {
        return arr.indexOf(elem) == pos;
    });
    var complete = uniqueArray.join('');
        return complete
  };
  longest("aretheyhere", "yestheyarehere");