"use strict";

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(scores) {
  let total = 0;
  let average = 0;

  for (i = 0; i < scores.length - 1; i++) {
    total = total + scores[i];
  }
  average = total / scores.length;
  return average;
}

getAverage(myScores);