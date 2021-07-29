let userScore = 0;
let cpuScore = 0;
// _span variables are examples of DOM variables
const userScore_span = document.getElementById("user-score");
const cpuScore_span = document.getElementById("cpu-score");
// _div variable is another example of a DOM variable
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCpuChoice() {
    const choices = ['r', 'p', 's'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function convertToWord(letter) {
    if (letter == 'r') return 'Rock';
    if (letter == 'p') return 'Paper';
    if (letter == 's') return 'Scissors';
}

function win(user, cpu) {
    userScore++;
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
    result_p.innerHTML = user + ' beats ' + cpu + '. You win!';
}

function lose() {
    cpuScore++;
}

function draw() {
    console.log('DRAW');
}

function game(userChoice) {
    const cpuChoice = getCpuChoice()
    switch (userChoice + cpuChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, cpuChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, cpuChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, cpuChoice);
            break;
    }
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
    })
}

main();