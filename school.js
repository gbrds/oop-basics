const Student = require('./student');
const Course = require('./course');

class School {
    constructor(name) {
        this.name = name;
        this.students = [];
        this.courses = [];
        this.nextStudentId = 1;
    }

    addCourse(course) {
        if (!this.courses.includes(course)) {
            this.courses.push(course);
        }
    }

    addStudent(student) {
        if (!this.students.some(s => s.getName() === student.getName())) {  // Check by name or use a unique check
            const studentAge = student.age();
            if (studentAge >= 16 && studentAge <= 65) {
                student.setId(this.nextStudentId);
                this.students.push(student);
                this.nextStudentId++;
            } else {
                throw new Error("Student is not within the valid age range for school.");
            }
        }
    }

    addStudentGrade(student, course, grade) {
        if (this.students.includes(student) && this.courses.includes(course)) {
            student.addGrade(course, grade);
            course.addGrade(student, grade);
        } else {
            throw new Error("Either the student or the course is not part of the school.");
        }
    }

    getStudents() {
        return this.students;
    }

    getCourses() {
        return this.courses;
    }

    getStudentsOrderedByAverageGrade() {
        return [...this.students]
            .sort((a, b) => b.getAverageGrade() - a.getAverageGrade());
    }
}

module.exports = School;
