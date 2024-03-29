function upper(){

    for(let i = 0; i< alpha.length; i++){
        alpha[i].innerText=alpha[i].innerText.toUpperCase();

    }
}


const alpha = document.querySelectorAll("p");

upper();