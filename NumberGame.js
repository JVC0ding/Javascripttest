const prompt = require("prompt-sync")();

console.log("Welcome to the Random number game")
console.log("I have a number 1 through 100. Choose the correct number. I will tell you higher or lower")

let winningNumber = parseInt(Math.random() * 100);

let userNumber = prompt("What is your number?")
userNumber = parseInt(userNumber)

while (userNumber !== winningNumber) {
    if (userNumber < winningNumber) {
        console.log("Higher")
    } else if (userNumber > winningNumber) {
        console.log("Lower")
    } else {
    }
    
    userNumber = prompt("What is your number?") 
    userNumber = parseInt(userNumber)
}

console.log("Ding Ding")