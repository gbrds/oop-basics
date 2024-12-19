const Person = require('./person');

class Student extends Person {
    constructor(name) {
        super(name);
        this.grades = [];
        this.studentId = 0;
    }

    setId(id){
        if(this.studentId === 0){
            this.studentId = id;
        }
    }

    getId(){
        return this.studentId;
    }

    addGrade(course, grade){
        this.grades.push({course, grade});
    }

    getGrades(){
        return this.grades;
    }

    getAvarageGrade(){
        if (this.grades.length === 0){
            return -1;
        }
        const total = this.grades.reduce((sum, g) => sum + g.grade, 0);
        return total / this.grades.lenght;
    }

    description() {
        return `${this.name} is a student with ID ${this.studetId}`
    }

}

module.exports = Student;