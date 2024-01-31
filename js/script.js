// creo una griglia con dei numeri che vanno da 0 a 100
const grillElement = document.querySelector("#griglia");

for (let i = 1; i <= 100; i++) {
    grillElement.style.fontWeight = "bold";

    // const newElement = document.createElement("div");
    // newElement.className = "square";
    // newElement.innerHTML = i;

    // grillElement.append(newElement)
    
    // if (i % 5 == 0) {
    //     grillElement.innerHTML += `<div class="square buzz">Buzz</div>`;
    // } else if (i % 3 == 0) {
    //     grillElement.innerHTML += `<div id="fizz" class="square fizz">Fizz</div>`;
        
    // } else if (i % 3 == 0 && i % 5 == 0) {
    //     grillElement.innerHTML += `<div id="fizzbuzz" class="square fizzbuzz">BuzzFizz</div>`;
    // } else {
    //     grillElement.innerHTML += `<div class="square " style="background-color:mediumpurple;">${i}</div>`;
    // }
    if (i % 3 == 0 && i % 5 == 0){
        grillElement.innerHTML += `<div class="square fizzbuzz">BuzzFizz</div>`;
    } else if (i % 3 == 0){
        grillElement.innerHTML += `<div class="square fizz">Fizz</div>`;
    } else if (i % 5 == 0){
        grillElement.innerHTML += `<div class="square buzz">Buzz</div>`;
    } else {
        grillElement.innerHTML += `<div class="square " style="background-color:mediumpurple;">${i}</div>`;
    }

    

}
