// Copy the student object to newStudent without mutating the original object. In the new object add the following ?

// 1. Add Bootstrap with level 8 to the front end skill sets
// 2. Add Express with level 9 to the back end skill sets
// 3. Add SQL with level 8 to the data base skill sets
// 4. Add SQL without level to the data science skill sets
const studentObj = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};
const devOps = [
  { skill: "AWS", level: 7 },
  { skill: "Jenkin", level: 7 },
  { skill: "Git", level: 8 },
];
const copiedStudentObj = {
  ...studentObj,
  skills: {
    ...studentObj.skills,
    frontEnd: [...studentObj.skills.frontEnd, { skill: "Bootstrap", level: 8 }],
    backEnd: [...studentObj.skills.backEnd, { skill: "Express", level: 8 }],
    dataBase: [...studentObj.skills.dataBase, { skill: "SQL", level: 8 }],
    dataScience: [...studentObj.skills.dataScience, "SQL"],
    devOps: [...devOps],
  },
};
console.log(copiedStudentObj);
