class Course {
    constructor(courseName) {
     this.courseName = courseName;
     this.grades = [];   
    }

    addGrade(student, grade){
        this.grades.push({student, grade})
    }

    getGrade(){
        return this.grades;
    }

    getAvarageGrade(){
        if(this.grades.length === 0){
            return -1;
        }
        const total = this.grades.reduce((sum, g) => sum + g.grade, 0);
        return total /  this.grades.length;
    }

    description(){
        return `Course: ${this.courseName}`;
    }
}

module.exports = Course;