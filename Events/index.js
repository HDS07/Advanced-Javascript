// for index file

// var text=document.getElementById('fipara');

// function changetext(){
//     text.textContent="Nice, everything is going allright!!"
// }
// text.addEventListener('click',changetext)

// text.removeEventListener('click',changetext)



// for second file

let para=document.querySelectorAll('p');
function alertfun(event){
    alert("Click on the para:"+ event.target.textContent);
    console.log(event.target);
}
for(let i=0;i<para.length;i++){
    let paras=para[i];
    paras.addEventListener('click',alertfun);
}
