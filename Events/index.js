var text=document.getElementById('fpara');

function changetext(){
    text.textContent="Nice, everything is going allright!!"
}
text.addEventListener('click',changetext)

// text.removeEventListener('click',changetext)