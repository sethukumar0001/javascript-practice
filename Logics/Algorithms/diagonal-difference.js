// https://www.hackerrank.com/challenges/diagonal-difference
// Given a square matrix (array of arrays), calculate the absolute difference between the sums of its diagonals.

// diagonalDifference([
//   [11, 2,   4],
//   [ 4, 5,   6],
//   [10, 8, -12]
// ]);  // 15

// Explanation
// The primary diagonal is:
//
// 11
//    5
//      -12
//
// Sum across the primary diagonal: 11 + 5 - 12 = 4
//
// The secondary diagonal is:
//
//      4
//    5
// 10
//
// Sum across the secondary diagonal: 4 + 5 + 10 = 19
// Difference: |4 - 19| = 15