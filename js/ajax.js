/*
! Ajax tutorial
* In this tutorial, we will learn what Ajax is and how it works. If you want to learn AJAX quickly, then you are at right place. In this tutorial, we will not only learn AJAX theoretically but also learn how to implement the AJAX concept in programming.

* Ajax stands for Asynchronous JavaScript And XML. Ajax loads the data from the server and updating the parts of a web page selectively without reloading the whole page. 

! Introduction of AJAX:-
* AJAX is a technique for creating faster, and more interactive web applications with the help of XML, HTML, CSS, and JavaScript. It is a web browser technology which is independent of web server software.

* AJAX use of the built-in browser XMLHttpRequest (XHR) objects to send and receive information to and from a web server asynchronously, in the background, without blocking the page or interfering with the user's experience.

* Ajax uses XHTML for the content, CSS for designing, along with Document Object Model and JavaScript for dynamic content display. Before AJAX technology, the web applications transmit information to and from the server using synchronous requests. It this we fill out a form, hit submit, and get directed to a new page with new information from the server. But with AJAX, when we hit submit, JavaScript will make a request to the server, interpret the results, and update the current screen.

* We can guess the popularity of AJAX, such that we hardly find an application that doesn't use Ajax to some extent. The example of Ajax-driven online applications are Gmail, Google Maps, YouTube, Facebook, and so many other applications.

! How Does AJAX Work?
* JavaScript and XML combine to make asynchronous updating happen through the use of something called an XMLHttpRequest (XHR) object. When the user visits a web page which is designed using AJAX technology, and a prescribed event occurs (a button, or fills out a form) the JavaScript creates an XMLHttpRequest (XHR) object, which then transfers data in an XML format between a web browser and a web. The XMLHttpRequest(XHR) object sends a request for updated page data to the web server, the server process the request, a response is created at server-side and sent back to the browser, which then uses JavaScript to process the response and display it on the screen as updated content.

! Image URL : https://api.codewithharry.com/media/videoSeriesFiles/courseFiles/javascript-tutorials-in-hindi-35/base64.png

! Summary:-
* The JavaScript automates the updating process, the request for updated content is formatted in XML to make it understandable, and JavaScript again refreshes the relevant content for the user viewing the page. Whereas the AJAX technique ignores extraneous page data and only handles requests for updated information and the updated information itself. This shows the AJAX's effectiveness, as it makes the websites and applications that use AJAX faster and more responsive to users.
*/

/*
! What is AJAX ?
* AJAX stands for asynchronous Javascript and XML
* AJAX is not a programming language. Rather it's a set of existing technologies
* AJAX helps in fetching data asynchronously without interfering with the existing page
* No page reload/ refresh
* Modern websites use JSON instead or XML for data transfer

! Why use AJAX ?
* No page reload/ refresh
* Better user experience
* Saves network bandwidth
* Very interactive

! How it works?
* AJAX uses XMLHttpRequest object (also called xhr object) to achieve this
* Modern websites use JSON instead or XML for data transfer
* Data can be transferred in any format and protocol (Not always https necessarily)
*/

// ! HTTP Status Codes: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
// ! XHR Ready State Values: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
console.log("Ajax tutorial in one video")

let fetchBtn =  document.getElementById('fetchBtn')
fetchBtn.addEventListener('click',buttonClickHandler)

function buttonClickHandler(){
    console.log("You have clicked the fetchBtn")
    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    // Use this for get request
    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true)

    // Use this for post request
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');

    // What to do on progress (optional)
    xhr.onprogress = function(){
        console.log('On progress')
    }

    /*
    xhr.onreadystatechange = function(){
        console.log("Ready state:",xhr.readyState)
    }
    */
    // What to do when response is ready (Ready state = 4)
    xhr.onload = function() {
        if (this.status === 200){
            console.log(this.responseText)
        }
        else{
            console.log("Some error occurred")
        }
    }

    params = `{"name":"test","salary":"123","age":"23"}`;
    xhr.send(params);

    console.log("We are done!")
}

/*
With post request we can send large amounts of data
Don't send passwords by get request instead use post request
*/

let popBtn =  document.getElementById('popBtn')
popBtn.addEventListener('click',popHandler)

function popHandler() {
    console.log("You have clicked the pop handler")
    const xhr = new XMLHttpRequest();

    xhr.open('GET','https://dummy.restapiexample.com/api/v1/employees',true)
    //xhr.getResponseHeader('Content-Type','application/json')


    xhr.onload = function() {
        if (this.status === 200){
            let obj = JSON.parse(this.responseText)
            console.log(obj)
            let list = document.getElementById('list')
            str = ''
            for(key in obj){
                str += `<li><${obj[key].employee_name}</li>`
            }
            list.innerHTML = str;

        }
        else{
            console.log("Some error occurred")
        }
    }

    xhr.send();
    console.log("We are done fetching employees")
}