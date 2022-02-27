// Write a function called convertArrayToObject which can convert the array to a structured object.
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];
const arr_to_obj = (arr) => {
  let result = arr.map((student) => {
    [name, skills, score] = student;
  });
  console.log({ name, skills, score });
};

arr_to_obj(students);
