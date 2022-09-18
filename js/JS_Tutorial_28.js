console.log("This is Tutorial 28")

// Object Literal : Object.prototype
const obj = {
    name:'harry',
    channel:'Code With Harry',
    address:'Mars'
}
// obj.prototype.getName = () => this.name  // ! will give an error

function Obj(givenName){
    this.name = givenName;
}

Obj.prototype.getName = () => this.name
Obj.prototype.setName = function(newName){
    this.name = newName;
}
let obj2 = new Obj('Harry')
console.log(obj2.toString())
console.log(obj2)
obj2.setName('Shubh')
console.log(obj2)
// Never do Object.prototype.getName = () => this.name