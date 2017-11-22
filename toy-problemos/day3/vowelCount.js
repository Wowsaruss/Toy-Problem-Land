// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, and u as vowels for this Kata.
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    var vowelsCount = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] == 'a') {
        vowelsCount++;
      } else if (str[i] == 'e') {
        vowelsCount++;
      } else if (str[i] == 'i') {
        vowelsCount++;
      } else if (str[i] == 'o') {
        vowelsCount++;
      } else if (str[i] == 'u') {
        vowelsCount++;
      }
    }
    return vowelsCount;
  }
  console.log(getCount('nlawieufgwbejcnmzpweniuvgsa'));
  console.log(getCount('94nchfei5ncowuhfnsiur'));
  console.log(getCount('qwertyuiopasdfghjklzxcvbnm'));
  console.log(getCount('47623948765204365283746'));