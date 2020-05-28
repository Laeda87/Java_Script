"use strict";

let modal = document.querySelector(".modal");
let close = document.querySelector("span");
let button = document.querySelector("button");


button.addEventListener("click", function() {
    modal.style.display = "block";
});

 close.addEventListener("click", function() {
    modal.style.display = "none";
});



