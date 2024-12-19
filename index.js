const Person = require('./person');
const Student = require('./student');
const Course = require('./course');
const School = require('./school');

const school = new School("Awesome School");

// Create students
const student1 = new Student("John Smith");
student1.setDateOfBirth(2007);
const student2 = new Student("Mary Lee");
student2.setDateOfBirth(2006);

// Add students to the school
school.addStudent(student1);
school.addStudent(student2);

// Ensure we cannot add the same student twice
school.addStudent(student1);

console.log(`Total students in school: ${school.getStudents().length}`); // Output: 2

// Create courses
const course1 = new Course("Math");
const course2 = new Course("Physics");

// Add courses to the school
school.addCourse(course1);
school.addCourse(course2);

// Ensure we cannot add the same course twice
school.addCourse(course1);

console.log(`Total courses in school: ${school.getCourses().length}`); // Output: 2

// Assign grades for student1 in courses
school.addStudentGrade(student1, course1, 4);
school.addStudentGrade(student1, course2, 5);

// Assign grades for student2 in courses
school.addStudentGrade(student2, course1, 5);
school.addStudentGrade(student2, course2, 4);

// Retrieve and log details

// Student 1 details
console.log(`Student: ${student1.getName()}, Age: ${student1.age()}`);
console.log(`Grades for ${student1.getName()}:`, student1.getGrades());

// Calculate and log the average grade of Student 1
console.log(`${student1.getName()}'s Average Grade: ${student1.getAvarageGrade()}`);

// Student 2 details
console.log(`Student: ${student2.getName()}, Age: ${student2.age()}`);
console.log(`Grades for ${student2.getName()}:`, student2.getGrades());

// Calculate and log the average grade of Student 2
console.log(`${student1.getName()}'s Average Grade: ${student2.getAvarageGrade()}`);

// Course 1 details
console.log(`Course: ${course1.courseName}`);
console.log(`Grades in ${course1.courseName}:`, course1.getGrade());
console.log(`${course1.courseName}'s Average Grade: ${course1.getAvarageGrade()}`);

// Course 2 details
console.log(`Course: ${course2.courseName}`);
console.log(`Grades in ${course2.courseName}:`, course2.getGrade());
console.log(`${course2.courseName}'s Average Grade: ${course2.getAvarageGrade()}`);
