

function rollDice() {
    console.log("Dice roll animation goes here")
    let roll = Math.floor(Math.random() * (20 - 1) + 1)
    console.log(roll)
    return roll
}

function rollIntro() {
    console.log("rolls dice")
    document.querySelector('#name').innerText = "Nicholas Tonelli."
    roll = rollDice()
    document.querySelector('#greet').innerText = greetings[roll -1]
}

greetings = [
    "Pleased to meet you.",
    "Thanks for stopping by.",
    "Hope you like the page.",
    "Welcome to my portfolio",
    "Nice to see you.",
    "Great to make your acquaintance.",
    "The pleasure is all mine.",
    "You're right on time.",
    "",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "it's *rolls dice* nice to meet you."
]


setTimeout(rollIntro, 1000)