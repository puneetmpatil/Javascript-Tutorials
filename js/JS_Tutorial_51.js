// Iterators in Javascript
/*
* Iterators were introduced in ES6. It is one of the popular JavaScript concepts since they are widely useful and used in various places. So, let us start with the theory.

! What is an iterator?
* It is an object that allows us to traverse over a list or collection. Iterators' purpose is to define the sequences and implement the iterator protocol that returns an object by using a next() method that contains the value and done. 

* done: It is a boolean value indicating whether any more elements in the sequence could be iterated upon.
* value: It is the current element of the sequence.
* So, we can define iterators as an “object that knows how to access items from a collection one at a time, while keeping track of its current position within that sequence.”

* Suppose we have an array, and it contains five numbers, i.e., [1,2,3,4,5]. As we know, the Iterator object has a next() method that returns the next item in the sequence. So, when we write next(), well get the element of the array. The next() method returns an object with two properties: value and done. If there are elements present in the sequence that could be iterated, then the value contains the next element and done is set to false:

* { value: 'next value', done: false }

* If we call the next() method after the last value has been returned, then the next() returns the result object as follows:

* {done: true: value: undefined}

* Here the value of the done property, which is true, indicates that there is no more value to return, and the value of the property is set to undefined.

* Here is a simple example of an iterator:

? function myIterable() {
?         let counter = 0;
?         return {
?             next:function(){
?                 if (counter < 5) {
?                 counter++;
?                 return { done: false, value: counter };
?                 } else {
?                 return { done: true, value: undefined };
?               }
?         }
?     }
? }

! Code Explanation:-
* The above code executes five steps, with the counter incrementing (counter++) every run. First, we return the value 1, then the value 2, and so on till we get the last element 5then we indicate that the end of the iteration has been reached, and the value becomes equal to undefined. 

! Summary:-
* In this tutorial, we learned about what iterator is and how we can use it. In JavaScript, an iterator is an object which defines a sequence and a return value upon the end of the sequence. An iterator implements the Iterator protocol by having a next() method that returns an object with two properties. As an iterator moves over the data structure and provides the elements sequentially, the object returned by the iterator contains a value and a done property.

*/
console.log("This is tutorial 51")

function fruitsIterator(values){
    let nextIndex = 0;
    // We will return an object
    return{
        next: function(){
            if (nextIndex < values.length){
                // We will return below object
                return {
                    value: values[nextIndex++], 
                    done: false
                }
            }
            else{
                // We will return below with only done
                return { 
                    done: true
                }
            }
        }
    }
}
const myArray = ['Apples','Grapes','Oranges','Bhindi']
console.log("My array is ", myArray)

// Using the iterator
const fruits = fruitsIterator(myArray)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)