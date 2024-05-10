"use strict";

console.log("----------------Up to questions 4_______in one loop");

let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
  },
];

let numberOfCourses = courses.length;

//Loop over the courses
for (let i = 0; i < numberOfCourses; i++) {
  //if the course we are on is "PROG200", get the start date
  if (courses[i].CourseId === "PROG200") {
    console.log(
      `The ${courses[i].CourseId} start date is ${courses[i].StartDate}`
    );
  }

  //if the course we are on is "PROJ500", get the title
  if (courses[i].CourseId === "PROJ500") {
    console.log(`The ${courses[i].CourseId} title is ${courses[i].Title}`);
  }

  //if the course we are on is less than 50 dollars, get the title
  if (courses[i].Fee <= 50) {
    console.log(
      `The ${courses[i].CourseId} title is ${courses[i].Title} and is under ${courses[i].Fee}`
    );
  }

  //end of the for loop
}
console.log("----------------Up to questions 4_______in one loop");

//all the classes in classroom one seperate from the bgger loop
//loop over the courses
for (let i = 0; i < numberOfCourses; i++) {
  //if the course we are on is "PROG200", get the start date
  //if the course we are on meet on classroom 1, get the title
  if (courses[i].Location <= "Classroom 1") {
    console.log(
      `The ${courses[i].CourseId} title is ${courses[i].Title} and meets in Classroom 1`
    );
  }
}
