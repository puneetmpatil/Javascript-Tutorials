/*
Quick Quiz
1. Create fruits.json and vegetables.json
2. DOM in Bootstrap template

*/
let tableBodyVeg = document.getElementById('vegetables') 
if (tableBodyVeg.childNodes.length == 0){
    tableBodyVeg.innerHTML = `<td colspan = "5">
                                <div class="alert alert-primary" role="alert">
                                Vegetables are not fetched yet from vegetable.json
                                </div>
                            </td>`
}
let tableBodyFruits = document.getElementById('fruits') 
if (tableBodyFruits.childNodes.length == 0){
    tableBodyFruits.innerHTML = `<td colspan = "3">
                                <div class="alert alert-info" role="alert">
                                Fruits are not fetched yet from Fruits.json
                                </div>
                                </td>`
}

let btns = document.getElementsByTagName('button')
for(let i=0; i<btns.length; i++){
    btns[i].addEventListener('click',() => {
        disableButtons(true);
        setTimeout(() =>{
            disableButtons(false);
        },1500)
    })
}
const disableButtons = (state) => {
    for(let i=0; i<btns.length; i++){
        btns[i].disabled = !! state;
    }
}


let vegBtn = document.getElementById('vegBtn');
vegBtn.addEventListener('click',vegBtnHandler)

function vegBtnHandler(){

    const xhr = new XMLHttpRequest();

    xhr.open('GET','json/vegetables.json',true);

    xhr.onload = function(){
        let message;
        if (this.status === 200){
            let vegetablesobj = JSON.parse(this.responseText);
            let vegetables = document.getElementById('vegetables');
            let str = ``
            vegetablesobj.forEach((element, index) =>{
                str += `<tr>
                            <td scope="row">${index+1}</td>
                            <td>${element.name}</td>
                            <td>${element.quantity}</td>
                            <td>${element.id}</td>
                            <td>${element.price}</td>
                        </tr>`
            })
            vegetables.innerHTML = str;
            message = `<div class="alert alert-success" role="alert">
            Data has been successfully fetched 
          </div>`
        }
        else{
            console.log("Some error occurred")
            message = `<div class="alert alert-danger" role="alert">
            Unfortunately data could not be fetched
          </div>`

        }
        let msg = document.getElementsByTagName('div')
        msg[1].innerHTML = message;
        setTimeout(() => {
            msg[1].innerHTML = ''
        }, 3000)
    }
    xhr.send()
}


let fruitsBtn = document.getElementById('fruitsBtn');
fruitsBtn.addEventListener('click',fruitBtnHandler)

function fruitBtnHandler(){

    const xhr = new XMLHttpRequest();

    xhr.open('GET','json/fruits.json',true);

    xhr.onload = function(){
        let message;
        if (this.status === 200){
            // console.log(this.responseText);
            let fruitsobj = JSON.parse(this.responseText);
            let fruits = document.getElementById('fruits');
            let str = ``
            fruitsobj.forEach((element, index) =>{
                str += `<tr>
                            <td scope="row">${index+1}</td>
                            <td>${element.name}</td>
                            <td>${element.price}</td>
                        </tr>`
            })
            fruits.innerHTML = str;
            message = `<div class="alert alert-success" role="alert">
            Data has been successfully fetched 
          </div>`
        }
        else{
            console.log("Some error occurred")
            message = `<div class="alert alert-danger" role="alert">
            Unfortunately data could not be fetched
          </div>`
        }
        let msg = document.getElementsByTagName('div')
        msg[1].innerHTML = message;
        setTimeout(() => {
            msg[1].innerHTML = ''
        }, 3000)
    }
    xhr.send()
}