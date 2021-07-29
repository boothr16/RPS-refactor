let userScore = 0;
let cpuScore = 0;
const WIN_SCORE = 5;
// _span variables are examples of DOM variables
const userScore_span = document.getElementById("user-score");
const cpuScore_span = document.getElementById("cpu-score");
// _div variable is another example of a DOM variable
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p"); // _p variable
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const actionMessage_p = document.getElementById('action-message');

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
    const smallUserWord = 'user'.fontsize(3).sup();
    const smallCpuWord = 'cpu'.fontsize(3).sup();
    const userChoice_div = document.getElementById(user);
    userScore++;
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(cpu)}${smallCpuWord}. You win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(user, cpu) {
    const smallUserWord = 'user'.fontsize(3).sup();
    const smallCpuWord = 'cpu'.fontsize(3).sup();
    const userChoice_div = document.getElementById(user);
    cpuScore++;
    userScore_span.innerHTML = userScore;
    cpuScore_span.innerHTML = cpuScore;
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} loses to ${convertToWord(cpu)}${smallCpuWord}. You lose!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(user, cpu) {
    const smallUserWord = 'user'.fontsize(3).sup();
    const smallCpuWord = 'cpu'.fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} equals ${convertToWord(cpu)}${smallCpuWord}. Draw!`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

function declareWinner(user, cpu) {
    if (user > cpu) {
        actionMessage_p.innerHTML = `USER FIRST TO ${WIN_SCORE}. USER WINS!`;
    }
    else {
        actionMessage_p.innerHTML = `CPU FIRST TO ${WIN_SCORE}. CPU WINS!`;
    }
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
    if (userScore == WIN_SCORE || cpuScore == WIN_SCORE) {
        declareWinner(userScore, cpuScore);
        resetGame();
    } 

}

function main() {
    rock_div.addEventListener('click', () => game('r'));
    
    paper_div.addEventListener('click', () =>  game("p"));
    
    scissors_div.addEventListener('click', () => game('s'));
}

main();