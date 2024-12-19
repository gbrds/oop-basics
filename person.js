class Person {
    constructor(name) {
        this.name = name;
        this.yearOfBirth = null;
    }

    setDateOfBirth(year) {
        this.yearOfBirth = year;
    }

    getDateOfBirth(){
        return this.yearOfBirth;
    }

    age(){
        const currentYear = new Date().getFullYear();
        return currentYear - this.yearOfBirth;
    }

    getName(){
        return this.name;
    }

    description(){
        return `${this.name} is a person`;
    }

}

module.exports = Person;