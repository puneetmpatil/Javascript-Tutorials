console.log("This is Tutorial 30")

const proto = {
    slogan: function(){
        return 'This company is the best'
    },
    changeName : function(newName){
        this.name = newName
    }
}
/*
// This creates harry object
const harry = Object.create(proto)
harry.name = 'harry'
harry.role = "Programmer"
harry.changeName('Harry Singh')
*/

// This also creates harry object
const harry = Object.create(proto,{
    name:{value:'harry',writable:true},
    role:{value:'Programmer'}
})
harry.changeName('Harry Singh')
// console.log(harry)

// Employee constructor
function Employee(name,salary,experience){
    this.name = name   
    this.salary = salary   
    this.experience = experience  
}

// Slogan
Employee.prototype.slogan = function(){
    return `This company is the best. Regards, ${this.name}`
}

// Create an object from the constructor now
let harryObj = new Employee("Harry",39000,87)
console.log(harryObj.slogan())

// Programmer
function Programmer(name,salary,experience,language){
    Employee.call(this,name,salary,experience)
    this.language = language;
}

// Inheritance the prototype
Programmer.prototype = Object.create(Employee.prototype)

// Manually set the constructor
Programmer.prototype.constructor = Programmer

let programmerObj = new Programmer('Rohan',2,0,'Javascript')
console.log(programmerObj)
console.log(programmerObj.slogan())

// Flour Cake
function Flour(egg,bakingpowder,whitesugar){
    this.egg = egg
    this.bakingpowder = bakingpowder
    this.whitesugar = whitesugar
}

Flour.prototype.message = function(){
    return `Cake is the best`
}

let myFlour = new Flour('2 eggs','10g','500g')
console.log(myFlour)
console.log(myFlour.message())

function Cake(egg,bakingpowder,whitesugar,price){
    Flour.call(this,egg,bakingpowder,whitesugar)
    this.price = price
}

// Inherit the prototype
Cake.prototype = Object.create(Flour.prototype)

// Manually set the constructor
Cake.prototype.constructor = Cake

let myCake = new Cake('2 eggs','10g','500g',300)
console.log(myCake)
console.log(myCake.message())


