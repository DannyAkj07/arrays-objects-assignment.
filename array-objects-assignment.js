// QUESTION 1
const students = [
  {
    id: 1,
    name: "Wale Adenuga",
    age: 22,
    grades: [65, 72, 91],
  },
  {
    id: 2,
    name: "Femi Olushola",
    age: 20,
    grades: [52, 68, 84],
  },
  {
    id: 3,
    name: "Chisom Oluchi",
    age: 23,
    grades: [69, 82, 95],
  },
  {
    id: 4,
    name: "Victor Osayi",
    age: 26,
    grades: [59, 77, 65],
  },
  {
    id: 5,
    name: "Gideon Emmanuel",
    age: 24,
    grades: [78, 87, 93],
  },
];

console.log(students);

// QUESTION 2

function calculateAverage(grades) {
  const sum = grades.reduce((total, grade) => total + grade, 0);
  const average = sum / grades.length;
  return average.toFixed(2);
}

const studentsWithAverage = students.map((student) => {
  return {
    ...student,
    average: calculateAverage(student.grades),
  };
});

console.log(studentsWithAverage);

// QUESTION 3

function getPassingStudents(students) {
  return students.filter((student) => {
    return parseFloat(student.average) >= 60;
  });
}
const passing = getPassingStudents(studentsWithAverage);
console.log(passing);

// QUESTION 4

function calculateClassAverage(students) {
  const totalSum = students.reduce((total, student) => {
    return total + parseFloat(student.average);
  }, 0);
  const classAvg = totalSum / students.length;
  return classAvg.toFixed(2);
}
const classAvg = calculateClassAverage(studentsWithAverage);
console.log(classAvg);

//  QUESTION 5

function findStudentById(students, id) {
  const foundStudent = students.find((student) => {
    return student.id === id;
  });
  if (foundStudent) {
    return foundStudent;
  } else {
    return null;
  }
}
const student = findStudentById(studentsWithAverage, 4);
console.log(student);
