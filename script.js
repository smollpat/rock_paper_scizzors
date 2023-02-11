

    function getComputerChoise(){
    let computerSelection = Math.floor(Math.random() * 3);
    switch(computerSelection){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 3: 
            return "scizzors";
        }
    }

    function getUserChoise(selection) {
        let userSelection = selection.toLowerCase();
        return userSelection;
    }

    

    function playground(){
        function getComputerChoise(){
            let computerSelection = Math.floor(Math.random() * 3);
            switch(computerSelection){
                case 0:
                    return "rock";
                case 1:
                    return "paper";
                case 3: 
                    return "scizzors";
                }
            }
        
            function getUserChoise(selection) {
                let userSelection = selection.toLowerCase();
                return userSelection;
            }
        if(userSelection === computerSelection){
            return "Draw!";
        } else if(userSelection === "rock" && computerSelection === "scizzors"){
            return "You won!";
        } else if(userSelection === "scizzors" && computerSelection === "paper"){
            return "You won!";
        } else if(userSelection === "paper" && computerSelection === "rock"){
            return "You won!";
        } else if(userSelection === "rock" && computerSelection === "paper"){
            return "You lose :(";
        } else if(userSelection === "paper" && computerSelection === "scizzors"){
            return "You lose :(";
        } else if(userSelection === "scizzors" && computerSelection === "rock"){
            return "You lose :(";
        }
    }

    


/* 
make a random computer choice +
make a user choice +
transform them to words + 
make them play 1 round and show who won 
make a loop for till one wins 5 times
make a prompt to ask for users choice
 */
