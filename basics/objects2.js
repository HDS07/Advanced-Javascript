//const obj1= new Object();  //singleton object  

const obj1={}
console.log(obj1);

obj1.email = "harsh@gmail.com"
obj1.name="harsh"

//nested object..
const obj2={
    email:"harsh@gmail.com",
    fullname:{
        firstname:"harsh",
        lastname:"deep"
    }
}
console.log(obj2.fullname.lastname);


const obj3={ 1:"a",2:"b"}
const obj4={3:"c",4:"d"}

// const obj5= Object.assign({},obj3,obj4);
const obj5={...obj3,...obj4};
console.log(obj5);

console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));

console.log(obj1.hasOwnProperty('email'));




