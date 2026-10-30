"use strict";

const Students = [
  [1000, "JOHN", "DOE", 14, 5],
  [2000, "BOB", "CARLTON", 7, 1],
  [3000, "RAYANE", "SMITH", 13, 3]
];

function A() {
  for (const student of Students) {
    const id = student[0];
    const grade = student[3];

    const decision = B(grade) ? "ADMITTED" : "ADJOURNED";

    console.log(id + ": " + decision);
  }
}

function B(grade) {
  return grade >= 10;
}