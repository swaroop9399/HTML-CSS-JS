let a = prompt("Hey whats your age?");
a = Number.parseInt(a);  // Converting the string to a number 
if(a<0){
    alert("This is invalid age");
}
else if(a<9){
    alert("You are a kid and you cannot even think of driving");
}
else if(a<18 && a>=9){
    alert("You are a kid and you can think of driving ater 18")
}
else{
    alert("You can drive as you are above 18")
}
console.log("Done")
// Homework - Explore switch statement and write a basic program 
console.log("You can ", (a<18? "not drive" :"drive"))