// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd"); = "A-Bb-Ccc-Dddd"
// accum("RqaEzty") = "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") = "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// Clarify
// For every letter add one letter.

// Sample Data
// accum("abcd"); = "A-Bb-Ccc-Dddd"
// accum("RqaEzty") = "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") = "C-Ww-Aaa-Tttt"

// Psudo Code
// function(str) -> str
// ...
// for loop

// Code
function accum(s) {
    let count = 1;
    let newS = "";
      for (let i = 0; i < s.length; i++) {
        newS += s[i].toUpperCase();
        for (let k = 1; k < count; k++) {
          newS += s[i].toLowerCase();
        }
        count++;
        if(i != (s.length - 1)) {
          newS += '-';
        }
      }
      return newS;
  }
  console.log(accum('BiufHDBEIW'));
  console.log(accum('erjbfwDJFVW'));
  console.log(accum(''));
  console.log(accum('o0Ooooooooo'));
  console.log(accum('v'));