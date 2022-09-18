// ES6 Classes and Inheritance
console.log("This is Tutorial 31")

class Employee{
    constructor(givenName,givenExperience,givenDivision){
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }
    slogan(){
        return `I am ${this.name} and this company is the best`
    }   
    joiningYear(){
        return 2020-this.experience
    }
    static add(a,b){
        return a+b;
    }
}

class Programmer extends Employee{
    constructor(givenName,givenExperience,givenDivision,language,github){
        super(givenName,givenExperience,givenDivision);
        this.language = language;
        this.github = github;
    }
    favouriteLangauge(){
        if (this.language == 'Python')
            return 'Python';
        else
            return 'Javascript';
    }
    static multiply(a,b){
        return a*b
    }
}

// harry = new Employee("Harry",56,"Division");
// console.log(harry)
// console.log(harry.joiningYear())
// console.log(Employee.add(34,5))

rohan = new Programmer('Rohan',3,"Lays","Go","rohan420")
console.log(rohan)
console.log(rohan.favouriteLangauge())
console.log(Programmer.multiply(5,7))
