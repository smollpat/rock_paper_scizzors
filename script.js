   

    function getComputerChoise(){
    let choice1 = Math.floor(Math.random() * 3);
    switch(choice1){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2: 
            return "scizzors";
        }
    }

    function getUserChoise() {
        let choice2 = prompt("Choose rock, paper or scizzors").toLowerCase();
        return choice2
    }
    
function game(){
    let netWins = 0
    for(let i = 0; i < 3; i++){
       
        let computerSelection = getComputerChoise();
        let userSelection = getUserChoise();
         
            if(userSelection === computerSelection){
                console.log("Draw!");
            } else if(userSelection === "rock" && computerSelection === "scizzors"){
                console.log("You won!");
                netWins += 1 ;
            } else if(userSelection === "scizzors" && computerSelection === "paper"){
                console.log("You won!");
                netWins += 1 ;
            } else if(userSelection === "paper" && computerSelection === "rock"){
                console.log("You won!");
                netWins += 1 ;
            } else if(userSelection === "rock" && computerSelection === "paper"){
                console.log("You lose :(");
                netWins -= 1 ;
            } else if(userSelection === "paper" && computerSelection === "scizzors"){
                console.log("You lose :(");
                netWins -= 1 ;
            } else if(userSelection === "scizzors" && computerSelection === "rock"){
                console.log("You lose :(");
                netWins -= 1 ;
            } 
    }
    if(netWins < 0) {
        console.log("Defeat");
    } else if(netWins > 0 ){
        console.log("Victory")
    } else {
        console.log("Draw")
    }
}

    

