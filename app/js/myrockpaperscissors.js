////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove, computerMove) {
    var winner;
    console.log(playerMove);
    console.log(computerMove);
    if (playerMove===computerMove) {
        winner = 'tie';
    }
    else if (playerMove==='rock' && computerMove==='scissors') {
        winner = 'player';
    }
    else if (playerMove==='paper' && computerMove==='rock') {
        winner = 'player';
    }
    else if (playerMove==='scissors' && computerMove==='paper') {
        winner = 'player';
    } 
    else {
        winner = 'computer';
    }

    return winner;
}



function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    
    var playerWins = 0; //4
    var computerWins = 0;
    var ties = 0;
    
    while(playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        console.log(winner);
        if(winner === 'player') {
            playerWins += 1;
        }
        else if(winner === 'computer') {
            computerWins += 1;
        }
        else {
            ties += 1;
        }
        
    console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove + '.');
    console.log('The score is currently ' + playerWins + ' to ' + computerWins + '.\n');
    console.log('There have been ' + ties + ' ties so far.');
    }
    
    if(playerWins >= 5) {
        console.log('Player has won');
    }
    else {
        console.log('Computer has won');
    }
    console.log('Playerwins: ' + playerWins + ', ' + 'Computer wins: ' + computerWins);
    alert('Playerwins: ' + playerWins + ', ' + 'Computer wins: ' + computerWins);
    return [playerWins, computerWins];
}

playToFive();