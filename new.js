let player = 0;
let computer = 0;

player++;
computer++;

function playRound(playerSelection, computerSelection){

    return playerSelection, computerSelection
}



function computerPlay(){
    let playArray = ['rock', 'paper', 'scissors'];
    let randomItem = playArray[Math.floor(Math.random()*playArray.length)]
    return randomItem;
}

function game(){
    let playerName = prompt('What is your name?', '')
    for(let i = 0; i < 5; i++){
    let playQuestion = prompt('what do you choose')
    // let playerPIck = ['rock', 'paper', 'scissors'];
    let computerPick = computerPlay()
    
    
    if(playQuestion === 'rock' && computerPick === 'rock'){

        alert('Its a tie. You both chose rock')
        console.log('Its a tie. You both chose rock')
        console.log(computerPick)
        console.log(playQuestion)
        
    } else if(playQuestion === 'rock' && computerPick === 'paper'){

        alert('Computer won. Paper beats rock')
        console.log('Computer won. Paper beats rock')
        console.log('Computer has ' + computer++ + ' points.')
        
    } else if(playQuestion === 'rock' && computerPick === 'scissors'){

        alert(playerName + ' wins. Rock beats scissors')
        console.log(playerName + ' wins. Rock beats scissors')
        console.log(playerName + " has " + player++ + ' points')
        
    }

    if(playQuestion === 'paper' && computerPick === 'paper'){

        alert('Its a tie. You both chose paper')
        console.log('Its a tie. You both chose paper')
        console.log(computerPick)
        console.log(playQuestion)
        
    } else if(playQuestion === 'paper' && computerPick === 'rock'){

        alert(playerName + ' wins. Paper beats rock')
        console.log(playerName + ' wins. Paper beats rock')
        console.log(playerName + " has " + player++ + ' points')
        
    } else if(playQuestion === 'paper' && computerPick === 'scissors'){

        alert('Computer won. Scissors beats paper')
        console.log('Computer won. Scissors beats paper')
        console.log('Computer has ' + computer++ + ' points.')
    }
    
    if(playQuestion === 'scissors' && computerPick === 'paper'){

        alert(playerName + ' wins. Scissors beats paper')
        console.log(playerName + ' wins. Scissors beats paper')
        console.log(playerName + " has " + player++ + ' points')
        
    } else if(playQuestion === 'scissors' && computerPick === 'rock'){

        alert('Computer won. Rock beats scissors')
        console.log('Computer won. Rock beats scissors')
        console.log('Computer has ' + computer++ + ' points.')

    } else if(playQuestion === 'scissors' && computerPick === 'scissors'){

        alert('Its a tie. You both chose scissors')
        console.log('Its a tie. You both chose scissors')
        console.log(computerPick)
        console.log(playQuestion)
    } 
}
if(computer > player){
    console.log('Computer wins with ' + computer++ + ' points')
    alert('Computer wins with ' + computer++ + ' points')
} else if(player > computer){
    console.log(playerName + ' beats computer with ' + player++ + ' points.')
    alert(playerName + ' beats computer with ' + player++ + ' points.')
}

}

game()



