"use strict";

let buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
        click(event);
    })
});

function click(event) {
    let cardNode = event.target.parentNode;
    let card = {
        block: cardNode,
        productName: cardNode.querySelector(".product_name"),
        img: cardNode.querySelector(".product_image"),
        button: cardNode.querySelector("button"),
    };

    let buttonTitle = card.button.innerText;
    if (buttonTitle === 'Подробнее') {
        showText(card);
    } else if (buttonTitle === 'Отмена') {
        hideText(card);
    }
}

function showText(card) {
    card.img.style.display = "none";
    card.button.innerText = "Отмена";
    card.button.insertAdjacentHTML("beforebegin", `<div class="add"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus debitis sed cumque laudantium aperiam voluptates necessitatibus, perspiciatis, tempore aspernatur harum itaque dignissimos nisi? Magnam labore, voluptatum impedit corporis quisquam ex voluptatem natus nulla quas, dolore quasi illum repellendus, obcaecati cumque soluta ea quidem? Ex facilis culpa, corporis, esse autem veritatis?</p></div>`);
    card.add.style.height = "200px";
   
}

function hideText(card) {
    card.img.style.display = "block";
    card.button.innerText = "Подробнее";   
    card.block.querySelector(".add").remove();
     
}
