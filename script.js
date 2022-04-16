function rollDice() {
    document.querySelector('#name').innerText = "Dice roll animation goes here"
}

function rollIntro() {
    console.log("rolls dice")
    rollDice()
    document.querySelector('#name').innerText = "Nicholas Tonelli"
}



setTimeout(rollIntro, 6000)