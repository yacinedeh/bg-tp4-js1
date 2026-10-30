"use strict";
function f1() {

  const Students = ["Students1", "Students2", "Students3"];


  for (let i = 0; i < Students.length; i++) {
    console.log(Students[i]);
  }
}


function f2() {

  const Students = {
    name: "John",
    Fname: "DOE",
    age: 30
  };

  console.log(Students);
}


function f3() {
  const Students = [
    { name: "nom1", Fname: "prenom1", age: 21 },
    { name: "nom2", Fname: "prenom2", age: 22 },
    { name: "nom3", Fname: "prenom3", age: 23 }
  ];

  for (const e of Students) {

    console.log(e.nom + "-" + e.prenom + "-" + e.age);
  }
}