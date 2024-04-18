let gameSeq = [];
let userSeq = [];

let buttons = ["yellow" , "red" , "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false) {
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function gameFlash(button) {
    button.classList.add("flash");
    setTimeout (function() {
        button.classList.remove("flash");
    }, 250)
}

function userFlash(button) {
    button.classList.add("userFlash");
    setTimeout (function() {
        button.classList.remove("userFlash");
    }, 250)
}


function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;


    let randIndex = Math.floor(Math.random() *3);
    let randColor = buttons[randIndex];
    let randButton = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randButton);

}

function checkAns(index) {
  
    

    if(userSeq[index] === gameSeq[index]) {
       if (userSeq.length == gameSeq.length) {
        setTimeout(levelUp, 1000);
       }
    } else {
        h2.innerHTML = `Game Over!!  Your Score was <b>${level}</b> <br> Press any key to Start.`
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout( function() {
            document.querySelector("body").style.backgroundColor = "white";
        } ,150);
        reset();
    }
}

function btnPress () {
    let button = this;
    userFlash(button);

    userColor = button.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);


}

let allBtns = document.querySelectorAll(".button");
for (button of allBtns) {
    button.addEventListener("click" , btnPress);
}

function reset () {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
