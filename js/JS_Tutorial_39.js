// Promises Basics, Promise.then() & Promise.catch()
/*
* Promises is a way through which we can deal with asynchronous operations in JavaScript. To understand this tutorial, check out my tutorial about JavaScript Callbacks. As we know that callback functions were initially used to handle asynchronous operations. However, callbacks functions were limited in terms of functionality and often led to confusing code, so, promises were introduced to deal with these problems. Many people struggle with understanding how Promises work especially beginners, so in this tutorial, we will try to understand promises by making it as simple as we can. In this tutorial, you will find an introduction to what Promises are, explanations of terms like resolve, reject along with coding examples.

! What is a Promise?
* A promise in JavaScript is similar to a promises we do in real life. When we make a promise, it is a guarantee that in future, we are going to do something. A promise has two possible outcomes: it will be kept when the time comes, or it will not. Similarly, in JavaScript, when we define a promise, either it will be resolved when the time comes, or it will get rejected. According to MDN, “the Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.”

! A promise has three states:
* pending: It is the initial state.
* Fulfilled: It indicates that the promised operation was successful.
* Rejected: It indicates that the promised operation was unsuccessful.

! The constructor syntax for a promise object is:
? let myPromise = new Promise(function(resolve, reject) {
? // code here
? });

* When new Promise is created, the function passed into it runs automatically. It contains the producing code which produces the result. Its arguments resolve and reject. Here is an example of simple promise.

? var promise = new Promise(function(resolve, reject) { 
?   const x = "geeksforgeeks"; 
?   const y = "geeksforgeeks"
?   if(x === y) { 
?     resolve(); 
?   } else { 
?     reject(); 
?   } }); 
? promise.then(function(){ 
? console.log('Success, You are a GEEK');}).catch(function () { 
? console.log('Some error has occurred');}); 

* A promise is created using a constructor that takes a call back function with two arguments resolve and reject in line 1. If the task is successful(x===y), the promise is resolved. If the task is unsuccessful(x is not equal to y), then the promise is rejected. The then() method is called if the promise is resolved, and the catch() method is called when the promise is rejected or if an error occurred during the code execution.

* Promises are the ideal choice for asynchronous programming. Promises can handle multiple asynchronous operations easily and are better at error handling as compared to callbacks and events.

! Benefits of Promises:-
* It improves the code readability
* It is better in the handling of asynchronous operations
* It has a better flow of control definition in asynchronous logic
* It is better in error handling

! Wrap Up:-
* So, in this tutorial, we have learned how we create a Promise in JavaScript and use it for the resolved and rejected cases. If you are a beginner, understanding how promises they work might take time.
*/

console.log("This is tutorial 39")

/*
Promise:
* reject
* resolve
* pending
*/
// Used as a substitute to callback functions
function func1(){
    return new Promise(function(resolve, reject){
        setTimeout(() =>{
            const error = true;
            if (!error){
                console.log("Function: Your promise has been resolved")
                resolve()
            }
            else{
                console.log("Function: Your promise has not been resolved");
                reject("Sorry not fulfilled")
            }
        },2000)
    })
}

func1().then(function(){
    console.log("Harry: Thanks for resolving")
}).catch(function(error){
    console.log("Harry: Very bad bro. Reason: " + error)
})