 gameState = "paused";

window.onload = function() {
    moveAirplane();
}

function moveAirplane() {
    window.addEventListener("keydown", function(evnt) {
        if (gameState == "running") {
            let airplane = document.getElementById("airplane");
            if (evnt.key == "ArrowLeft") {
                airplane.style.marginLeft = (parseFloat(getComputedStyle(airplane).marginLeft, 10) - 15).toString() + "px";
            } else if (evnt.key == "ArrowRight") {
                airplane.style.marginLeft = (parseFloat(getComputedStyle(airplane).marginLeft, 10) + 15).toString() + "px";
            }
        }
    })
}

function switchGameState() {
    if (gameState == "running") {
        gameState = "paused";
    } else {
        gameState = "running";
    }
}

function startPauseGame() {
    switchGameState();
    let startPauseButton = document.getElementById("startPauseButton");
    if (gameState == "running") {
        startPauseButton.innerHTML = "PAUSE";
        startPauseButton.setAttribute("style", "background-color: red !important");
    } else {
        startPauseButton.innerHTML = "RESUME";
        startPauseButton.setAttribute("style", "background-color: green !important");
    }
    if (gameState == "running") {
        // console.log("the game is running");
    }
}