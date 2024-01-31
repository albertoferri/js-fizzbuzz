// creo una griglia con dei numeri che vanno da 0 a 100
const grillElement = document.querySelector("#griglia");

for (let i = 1; i <= 100; i++) {
    grillElement.style.fontWeight = "bold"
    
    if (i % 5 == 0) {
        grillElement.innerHTML += `<div class="square buzz">${i}</div>`;
    } else if (i % 3 == 0) {
        grillElement.innerHTML += `<div class="square fizz">${i}</div>`;
    } else if (i % 3 == 0 && i % 5 == 0) {
        grillElement.innerHTML += `<div class="square fizzbuzz">${i}</div>`;
    } else {
        grillElement.innerHTML += `<div class="square">${i}</div>`;
        const otherSquare = document.querySelector(".square");
        otherSquare.style.backgroundColor = "#1389b2";
    }
    

}
