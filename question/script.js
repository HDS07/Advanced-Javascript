let con=document.getElementsByClassName('box');
console.log(con);
// let con=document.querySelector('.container').children;

function getrandomcolor(){
    var val1=Math.ceil(0+Math.random()*255);
    var val2=Math.ceil(0+Math.random()*255);
    var val3=Math.ceil(0+Math.random()*255);
    return  `rgb(${val1},${val2},${val3})`
}
for(let i=0;i<con.length;i++){
    con[i].style.background=getrandomcolor();
    con[i].style.color=getrandomcolor();
}


