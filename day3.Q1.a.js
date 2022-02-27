// 1. A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destruction the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable.

const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];

const [name, skills, scores] = student;

console.log({ name, skills, scores });

// const students = [
//   ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
//   ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
//   ["Rajeeva", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
// ];
// const arrayToObj = (students) => {
//   students.map((student) => {
//     [name, skills, scores] = student;
//     console.log({ name, skills, scores });
//     // return student.indexOf()
//   });
// };

// arrayToObj(students);
