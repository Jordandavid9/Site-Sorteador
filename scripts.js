function generateNamber() {

    const min = Math.ceil(document.querySelector(".input-entre").value)
    const max = Math.floor(document.querySelector(".input-e").value)
    const result = document.querySelector(".result")


    if (min >= max) {

        alert("O segundo numero tem que ser Maior que o primeiro") }

    else {

       result.innerHTML = Math.floor(Math.random() * (max - min + 1)) + min;

       }
}