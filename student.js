// Part 1: Accessing Individual Quarter Grades

// Write a function named getQuarterGrade that takes three arguments:

// The student data object.
// A subject(either "math" or "science").
// A quarter(either "firstQuarter," "secondQuarter," "thirdQuarter," or "fourthQuarter").
// The function should do the following:

// Accept the student data object, subject, and quarter as arguments.
// Access the grade of the specified subject and quarter.
// Return the grade as a number.
// For the given studentData object, calling getQuarterGrade(studentData, "math", "secondQuarter") should return 85.


// Create a function that takes 3 args,
// - student data object
// - subject: string (math, or science)
// - quarter: string (thirdQuarter, etc)

// Given the subject and the quarter we want to target the given students grade
// we want to drill into the student object
//  - grades, {subject}, {quarter}

// The return shoulld be a single grade

function getQuarterGrade(studentObject, subject, quarter) {
  return studentObject.grades[subject][quarter];
}

// getQuarterGrade(studentData, "math", "secondQuarter");


// Two ways to access a propert ., []
// dot notation expects the exact name of the property. You are limited in being able to use a variable

// ---------------------------------------------------------------------------------------------------------------------

// Part 2: Calculating Average Grade

// Write a function named calculateAverageGrade that takes two arguments:

// The student data object.
// A subject.
// The function should calculate and return the average grade for the specified subject.

// The function should do the following:

// Accept the student data object and subject as arguments.
// Access all four quarter grades of the specified subject.
// Calculate the average of those grades.
// Return the average as a number, rounded to one decimal place.
// For the given studentData object, calling calculateAverageGrade(studentData, "science") should return approximately 85.5.

// -----------------------------------------------------------------------------------------------------------------------

// We want to create a function calculateAverageGrade
// Two args: data object, and subject

// Return the average of all the subject quarters grades
let studentData = {
  name: "John Doe",
  age: 18,
  grades: {
    math: {
      firstQuarter: 92,
      secondQuarter: 85,
      thirdQuarter: 88,
      fourthQuarter: 95
    },
    science: {
      firstQuarter: 78,
      secondQuarter: 83,
      thirdQuarter: 89,
      fourthQuarter: 92
    }
  }
};


function calculateAverageGrade(studentObject, subject) {
  // console.log(studentObject.grades[subject]);
  const listOfGradesForSubject = Object.values(studentObject.grades[subject]);
  const numberOfQuarters = Object.values(studentObject.grades[subject]).length;
  let total = 0;

  for (let i = 0; i < numberOfQuarters; i++) {
    total += listOfGradesForSubject[i];
  }

  return (total / numberOfQuarters).toFixed(2);
}


// console.log(calculateAverageGrade(studentData, "science"));

// ---------------
let answers = [
  {
    question: 'What is the phase where chromosomes line up in mitosis?',
    response: 'Metaphase',
    isCorrect: true,
    isEssayQuestion: false
  },
  {
    question: 'What anatomical structure connects the stomach to the mouth?',
    response: 'Esophagus',
    isCorrect: true,
    isEssayQuestion: false
  },
  {
    question: 'What are lysosomes?',
    response: 'A lysosome is a membrane-bound organelle found in many animal cells. They are spherical vesicles that contain hydrolytic enzymes that can break down many kinds of biomolecules.',
    isCorrect: true,
    isEssayQuestion: true
  },
  {
    question: 'True or False: Prostaglandins can only constrict blood vessels.',
    response: 'True',
    isCorrect: false,
    isEssayQuestion: false
  }
];

console.log(answers[1].response);

