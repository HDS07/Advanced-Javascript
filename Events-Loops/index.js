setTimeout(function(){
    console.log("this code may be last!!");
},4000);

console.log("Hi,myself harsh");

setTimeout(function(){
    console.log("this code may be second last!!");
},3000);

console.log("Checking order of the codes running!");