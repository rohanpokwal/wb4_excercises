"use strict";

let students = [
  { name: "Zephaniah", scores: [100, 96, 99, 92] },
  { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
  { name: "Siddalee", scores: [86, 72, 92] },
  { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
  { name: "Elisha", scores: [89, 100] },
  { name: "Ezra", scores: [100, 99, 100, 87] },
];

let lengthOfStudents = students.length;

for (let i = 0; i < lengthOfStudents; i++) {
  let total = 0;
  let lengthOfScores = students[i].scores.length;
  let scoresArray = students[i].scores;

  for (let j = 0; j < lengthOfScores; j++) {
    total += scoresArray[j];
  }

  let average = total / lengthOfScores;

  console.log(`the average for ${students[i].name} is ${average.toFixed(2)}`);
}
