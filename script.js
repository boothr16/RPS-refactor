const userScore = 0;
const cpuScore = 0;
// _span variables are examples of DOM variables
const userScore_span = document.getElementById("user-score");
const cpuScore_span = document.getElementById("cpu-score");
// _div variable is another example of a DOM variable
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCpuChoice() {
    const choices = ['r', 'p', 's'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function game(userChoice) {
    const cpuChoice = getCpuChoice()
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })
    
    paper_div.addEventListener('click', function() {
        game("p");
    })
    
    scissors_div.addEventListener('click', function() {
        game("s");
    }).
}

main();