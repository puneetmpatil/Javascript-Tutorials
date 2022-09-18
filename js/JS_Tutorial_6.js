console.log("We are at Tutorial 6")
const name = 'Harry'
const greeting = 'Good Morning'
console.log(greeting + ' ' + name)

let html;
html = "<h1> This is a heading</h1>" + "<p> This is my para</p>"
html = html.concat(' this', ' str2')
console.log(html)
console.log(html.length)
console.log(html.toLowerCase())
console.log(html.toUpperCase())
console.log(html)

console.log(html[0])
console.log(html[1])

console.log(html.indexOf('This'))
console.log(html.lastIndexOf('<'))
console.log(html.charAt(3))
console.log(html.endsWith('str2'))
console.log(html.endsWith('str3'))
console.log(html.includes(' fg'))
console.log(html.substring(1,6))
console.log(html.slice(0,4))
console.log(html.slice(-4))
console.log(html.split(' '))
console.log(html.split('>'))
console.log(html.replace('This','it'))      // Replaces first occurrence of This with it

let fruit1 = 'Orange\''
let fruit2 = 'Apple'
let myHtml = `Hello ${name}
                <h1> This is "my" heading </h1>
                <p> You like ${fruit1} and ${fruit2} </p> 
                `
console.log(myHtml)
document.body.innerHTML = myHtml

let myName = 'Puneet'
let mySem = 'V'
let myDepartment = 'Computer'
let myStr = `I am ${myName} from ${myDepartment} studying currently in sem ${mySem}`
//document.body.innerHTML = myStr