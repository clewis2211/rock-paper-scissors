function playGame (playerSelection, computerSelection){
    let startGame = prompt('What do you choose?', '')
    const rock = ['Rock', 'ROCK', 'rOCK','rock'];
    const paper = ['Paper', 'PAPER', 'pAPER', 'paper'];
    const scissors = ['Scissors', 'SCISSORS', 'sCISSORS', 'scissors']
    
    if (startGame = rock){
        console.log(rock[])
        // return rock;
    }else if(startGame = paper) {
        console.log(paper)
    }else if (startGame = scissors){
        console.log(scissors)
    }else{
        console.log('choose wisely')
    }
}

playGame()

// // console.loc(playGame())

// function computerPlay(){
//     let a = 'Rock';
//     let b = 'Paper';
//     let c = 'Scissors';

//     let playArray = [a, b, c];
//     let randomItem = playArray[Math.floor(Math.random()*playArray.length)]
//     // let randomItem = [Math.floor(Math.random()*playArray.length)]
//     console.log(randomItem)
// }

// // const playerSelection ='rock';
// // const computerSelection = computerPlay()
// // console.log(playGame(playerSelection, computerSelection))


