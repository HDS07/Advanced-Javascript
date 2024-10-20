
/*All about the synchronous code */

let firstpromise =new Promise((resolve,reject)=>{
    console.log("learning about promises");
    resolve("Promise resolved");
});

/*
let firstpromise2 =new Promise((resolve,reject)=>{
    console.log("show promise2 reject state");
    reject(new Error("Promise2 is show some error!!"));
});
*/

/*Asynchronous code */
let promises=new Promise((resolve,reject)=>{
    setTimeout(function(){
        console.log("Asynchronous function!!");
        resolve("Promise resolved");
    },5000);
});

