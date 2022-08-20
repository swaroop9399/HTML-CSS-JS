console.log("AJAX tutorial in one video");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
    console.log('You have clicked the fetchBtn')
    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true)

    // USE THIS FOR POST REQUEST
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true)
    xhr.getAllResponseHeaders('Content-type', 'application/x-www-form-urlencoded');


    // What to do on progress(optional)
    xhr.onprogress = function(){
        console.log('On progress');
    }
    // What to do when response is ready
    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText)
        }
        else{
            console.log("Some error occured")
        }
        
    }

    // send the request
    params = "name:test&salary:123&age=23"
    xhr.send(params);

    console.log("We are done!");
}

let popBtn = document.getElementById("popBtn");
popBtn.addEventListener('click', popHandler)

function popHandler(){
    console.log('You have clicked the pop handler')
    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'https://dummy.restapiexample.com/api/v1/employees', true)

    // What to do when response is ready
    xhr.onload = function(){
        if(this.status === 200){
           let obj = JSON.parse(this.responseText)
           console.log(obj)
           let list = document.getElementById('list');
           for (key in obj)
           {
                str == `<li>$(obj[key])</li>`;
           }
        }
        else{
            console.log("Some error occured")
        }
        
    }

    // send the request
    xhr.send();

    console.log("We are done fetchig employees!");
}