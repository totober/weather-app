export {createPrincipal}


function createCard(){

    let card = document.createElement("article");
    let first = document.createElement("div");
    let second = document.createElement("div");
    let third = document.createElement("div");
    let fourth = document.createElement("div");

    card.classList.add("card");
    first.classList.add("first");
    second.classList.add("second");
    third.classList.add("third");
    fourth.classList.add("fourth");

    card.appendChild(first)
    card.appendChild(second)
    card.appendChild(third)
    card.appendChild(fourth)

    return card
}



function createPrincipal(){
    let card = createCard()
    card.classList.add("principal")

    let cardArr = Array.from(card.children)
    let [first, second, third, fourth] = cardArr
    console.log(first)
    console.log(second)
    console.log(third)
    console.log(fourth)
}

createPrincipal()