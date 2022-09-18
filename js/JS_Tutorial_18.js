// More on Javascript Events
console.log("This is tutorial 18")
/*
let btn = document.getElementById('btn')
btn.addEventListener('click',func1);
btn.addEventListener('mousedown',func3);
btn.addEventListener('dblclick',func2);

function func1(e){
    console.log("Thanks",e)
    e.preventDefault();             // Form won't be submitted on clicking on btn
}
function func2(e){
    console.log("Thanks its a double click",e)
    e.preventDefault(); // Form won't be submitted on double-clicking on btn
}
function func3(e){
    console.log("Thanks its a mousedown",e)
    e.preventDefault(); // Form won't be submitted on double-clicking on btn
}
document.querySelector('.no').addEventListener('mouseenter',function(e){
    console.log("You enter no")
})
document.querySelector('.no').addEventListener('mouseleave',function(e){
    console.log("You exited no")
})
*/
document.querySelector('.container').addEventListener('mousemove',function(e){
    console.log(e.offsetX,e.offsetY)
    document.body.style.background = `rgb(${e.offsetX},${e.offsetY},154)`
    console.log("You triggered mouse move event")
})
