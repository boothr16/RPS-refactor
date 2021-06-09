// randomly selects rock, paper, or scissors
function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const min = 0;
    const max = choices.length - 1;
    const rand = Math.floor(Math.random() * (max - min + 1)) + min; // true random, inclusive range
    console.log(choices[rand]);
    return choices[rand];
}
