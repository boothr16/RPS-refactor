// randomly selects r, p, or s
function computerPlay() {
    const choices = ["r", "p", "s"];
    const min = 0;
    const max = choices.length - 1;
    const rand = Math.floor(Math.random() * (max - min + 1)) + min; // true random, inclusive range
    //console.log(choices[rand]);
    return choices[rand];
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let userChoice = button.id;
        let computerChoice = computerPlay();
        if (userChoice == computerChoice)
        alert("Tie!");
        else {
            if (computerChoice == "r") {
                if (userChoice == "p") {
                    alert("Player wins!");
                    return true;
                }
                else if (userChoice == "s"){
                    alert("PC wins!");
                    return false;                
                }
                else
                    alert("Invalid input.");
            }
            else if (computerChoice == "p") {
                if (userChoice == "s") {
                    alert("Player wins!");
                    return true
                }
                else if (userChoice == "r") {
                    alert("PC wins!");
                    return false
                }
                else
                    alert("Invalid input.");            
            }
            else {
                if (userChoice == "r") {
                    alert("Player wins!");
                    return true;
                }
                else if (userChoice == "p") {
                    alert("PC wins!");
                    return false;
                }
                else
                    alert("Invalid input.");            
            }
        }
    });
});

