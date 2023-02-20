function winner() {
    result.textContent = 'Victory!!!';
    userWins = 0;
    compWins = 0;
    body.appendChild(result);
}

function loser(){
    result.setAttribute('id', 'result');
    result.textContent = 'Defeat...';
    body.appendChild(result);
    userWins = 0;
    compWins = 0;
}

function randomizer(){
    let random = Math.floor(Math.random() * 3);
switch(random){
    case 0:
        return "rock";
    case 1:
        return "paper";
    case 2: 
        return "scizzors";
    }
}
    
function game(){
    if(userWins < 5 && compWins < 5){
    result.textContent = '';
    }
    let userSelection = this.id;
    let computerSelection = randomizer();

    
    if(userSelection === computerSelection){
        userWins += 0;   
    } else if(userSelection === "rock" && computerSelection === "scizzors"){
         userWins += 1 ;
    } else if(userSelection === "scizzors" && computerSelection === "paper"){
         userWins += 1 ;
    } else if(userSelection === "paper" && computerSelection === "rock"){
        userWins += 1 ;
    } else if(userSelection === "rock" && computerSelection === "paper"){
        compWins += 1 ;
    } else if(userSelection === "paper" && computerSelection === "scizzors"){ 
        compWins += 1 ;
    } else if(userSelection === "scizzors" && computerSelection === "rock"){
        compWins += 1 ;
     } 

     userScore.textContent = `Player: ${userWins}`;  
     compScore.textContent = `Computer: ${compWins}`;

    if(userWins === 5) {
        winner();
    } else if(compWins === 5){
        loser();
    } 
    
}


let userWins = 0;
let compWins = 0;
const userScore = document.querySelector('#player');
const compScore = document.querySelector('#computer');
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', game));
const body = document.querySelector('body');
const result = document.createElement('div');
result.setAttribute('id', 'result');





    

