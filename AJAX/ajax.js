console.log("AJAX tutorial in one video");


document.getElementById("fetchBtn");
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
    console.log('You have clicked the fetchBtn')
    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true)

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
    xhr.send();

    console.log("We are done");
}