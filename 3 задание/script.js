"use strict";

function createChess() {
    let chessBox = document.querySelector(".chess_box");
    let block;
          
    for (let i = 0; i < 8; i++) {
        for (let a = 0; a < 8; a++) {
            block = document.createElement("div");
        
        if (i % 2 == 0) block.className = "chess_block white";
             
                            
         if (i % 2 != 0) block.className = "chess_block black";
               if (a % 2 != 0) block.className = "chess_block white";
            chessBox.appendChild(block);
                       }   
    }
    }
createChess();
