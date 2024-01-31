// creo una griglia con dei numeri che vanno da 0 a 100
const grillElement = document.querySelector("#griglia");

for (let i = 0; i <= 100; i++) {

    grillElement.innerHTML += `<div class="square" >${i}</div>`

    // console.log(grillElement)
}