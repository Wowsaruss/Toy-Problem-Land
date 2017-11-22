// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

// Example Data
// [5, 5, 3, 6, 6, 6, 3, 9] = 6

// Psudo Code
// function(array) -> integer
// 

function findOdd(A) {
    var count = 0;
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A.length; j++) {
            if (A[i] === A[j]) {
                count++;
            }
        }
        if (count % 2 !== 0) {
            return A[i];
        }
    }
    return 0;
  }
  console.log(findOdd([1, 2, 3, 1, 2, 3, 3]));