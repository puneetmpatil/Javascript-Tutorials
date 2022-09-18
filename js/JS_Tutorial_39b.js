const students = [
    { name: "Harry", subject: "Javascript" },
    { name: "Rohan", subject: "Machine Learning" }
]

function enrollStudent(student) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            students.push(student)
            console.log("Student has been enrolled")
            const error = false
            if (!error)
                resolve()
            else
                reject()
        }, 5000)
    })
}
function getStudents() {
    setTimeout(() => {
        let str = ``
        students.forEach(student => {
            str += `<li>${student.name}</li>`
        })
        document.getElementById('students').innerHTML = str;
        console.log("Student have been fetched")
    }, 1000)
}

let newStudent = { name: "Sunny", subject: "Python" }
enrollStudent(newStudent).then(getStudents).catch(function () {
    console.log("Some error occurred")
})
// getStudents();

// function inside then is ran as - resolve();
// function inside catch is ran as - reject();

const check = (number) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number >= 10)
            resolve();
            else
            reject("Number is less than 10")
        },2000)
    })
}
check(15).then(function(){
    console.log("Number is greater than 10")
}).catch(function(error){
    console.log(error)
})