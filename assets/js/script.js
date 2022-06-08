const element = document.getElementById("start-button")
element.addEventListener("click", startGame);

function startGame() {
    document.getElementById("start-game").textContent = "Game On!"
}
