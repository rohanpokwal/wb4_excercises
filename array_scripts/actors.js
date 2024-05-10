"use strict";

let academyMembers = [
  {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"],
  },
  {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"],
  },
  {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"],
  },
  {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"],
  },
];

//Solution Starts Here
let academyMembersArrayLength = academyMembers.length;

console.log("Question 1: Who is the Academy Member whose ID is 187 ?");
for (let i = 0; i < academyMembersArrayLength; i++) {
  let flimArray = academyMembers.flims;
  if (academyMembers[i].memID === 187) {
    console.log(`${academyMembers[i].name} has the member ID 187`);
  }
}

console.log();
console.log("Question 2: Who has have been in at least 3 Films ?");
for (let i = 0; i < academyMembersArrayLength; i++) {
  let flimArray = academyMembers[i].films.length;

  if (flimArray >= 3) {
    console.log(`${academyMembers[i].name} has been in more than 3 films`);
  }
}

console.log();
console.log("Question 3: Who has the name that starts with 'Bob'?");
for (let i = 0; i < academyMembersArrayLength; i++) {
  if (academyMembers[i].name.indexOf("Bob") === 0) {
    console.log(`${academyMembers[i].name} has name starts with "Bob"`);
  }
}

console.log();
console.log();
for (let i = 0; i < academyMembersArrayLength; i++) {
  let flimArrayLength = academyMembers[i].films.length;
  let filmArray = academyMembers[i].films;

  for (let j = 0; j < flimArrayLength; j++) {
    if (filmArray[j].startsWith("A")) {
      console.log(`"${academyMembers[j].name}" flim starts with A`);
    }
  }
}
