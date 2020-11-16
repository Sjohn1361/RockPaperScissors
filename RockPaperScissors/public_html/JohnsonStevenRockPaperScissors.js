const result_div = document.getElementById("result");

function generateComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function getUserChoice() {

    var inputs = document.getElementsByName("choice");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            return inputs[i].value;
        }
    }
}

function compare(computerChoice, userChoice) {

    const draw = "draw";
    const win = "win";
    const lose = "lose";

    if (userChoice === computerChoice) {
        printResult(draw, computerChoice, userChoice);
    } else {
        if (userChoice === "Rock") {
            if (computerChoice === "Scissors") {
                // rock wins
                printResult(win, computerChoice, userChoice);
            } else {
                // paper wins
                printResult(lose, computerChoice, userChoice);
            }
        }
        if (userChoice === "Paper") {
            if (computerChoice === "Rock") {
                // paper wins
                printResult(win, computerChoice, userChoice);
            } else {
                // scissors wins
                printResult(lose, computerChoice, userChoice);
            }
        }
        if (userChoice === "Scissors") {
            if (computerChoice === "Rock") {
                // rock wins
                printResult(lose, computerChoice, userChoice);
            } else {
                // scissors wins
                printResult(win, computerChoice, userChoice);
            }
        }
    }    
}

function printResult(result, computerChoice, userChoice) {
    if (result === "lose") {
        window.alert(userChoice + " loses to " + computerChoice + ". You lose!");
    } else if (result === "win") {
        window.alert(userChoice + " beats " + computerChoice + ". You win!");
    } else {
        window.alert(userChoice + " equals " + computerChoice + ". It's a draw!");
    }
}

function PlayTheGame() {
    const computerChoice = generateComputerChoice();
    const userChoice = getUserChoice();

    compare(computerChoice, userChoice);
}
