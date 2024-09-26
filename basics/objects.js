const sym=Symbol("key1");
const jsuser={
    name : "Harsdeep",
    "full name": "Harshdeep shakya",
    age : 20,
    occupation : "Student",
    email:"harsh.github.com",
    [sym]:"arrow key"
}
console.log(jsuser.name);

console.log(jsuser["full name"]);
// console.log(jsuser.full name);    it shows an error because we can't access all values by dot. Correct way is in the above line.

console.log(jsuser[sym]);

jsuser.email="deepu.github.com";
console.log(jsuser);

//Object.freeze(jsuser);     // Freeze the object that means we can't change values.

jsuser.email="Harshdeep.github.com";
console.log(jsuser["email"]);

jsuser.greeting=function(){                          
    console.log("Hello user!!");                      // for calling this first we have to stop freeze object in the above.
}

jsuser.greetingtwo=function(){
    console.log(`Hello ${this["full name"]} !!`);           // backticks are used for dynamically call something.
}

console.log(jsuser.greeting);
console.log(jsuser.greeting());

console.log(jsuser.greetingtwo());