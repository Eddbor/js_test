
//these are some variables that it needs.
let computerMove
let playerMove
let playerPoints = 0
let computerPoints = 0

//The bots choice small chance of getting a gun wich is a automatic win or tie and also makes it a 1/3 chance of getting the other 3 options of a rock/papper/scissors game.
function getComputerChoice() {
    let randomChoice = Math.round((Math.random()) * 100)
    if (randomChoice == 0 || randomChoice == 100){
        computerMove = 'Gun'
    }else if (randomChoice <= 33){
        computerMove = 'Bow'
    }else if (randomChoice <= 66){
        computerMove = 'Shield'
    }else{
        computerMove = 'Sword'
    }
}

//This is the prompt that i need for the player to choose his weapon makes his answer lower case so he can type it however he wants it will read it no matter what.
//If the player does type anything else it will tell the player to type another one. Gun is a option but we don't tell them that.
function getPlayerChoice(){
    let playerChoice = prompt('Chose your MEDIEVAL weapon to kill your clone!', '(Bow, Shield, Sword)')
    let convPlayerMove = playerChoice.toLowerCase()
    if (convPlayerMove == 'bow'){
        playerMove = 'Bow'
    }else if(convPlayerMove == 'shield'){
        playerMove = 'Shield'
    }else if(convPlayerMove == 'sword'){
        playerMove = 'Sword'
    }else if(convPlayerMove == 'gun'){
        playerMove = 'Gun'
        alert('Where did you find that?')
    }else{
        alert("You look around and you don't find that weapon... Try to look for another one.")
        return(getPlayerChoice())
    }
}

//these are the many outcomes that can come with a round including an extra one for gun vs gun, player using gun, and bot using gun.
function playRound(){
    getComputerChoice()
    getPlayerChoice()
    if (computerMove == 'Gun' && playerMove == 'Gun'){
        return("Ok... thats proof that he is indeed your clone... you both are cowards. After missing all of your shots you both try to knock eachother out and manage to do so. It's a Tie... a pitifull Tie")
    }else if (computerMove == playerMove){
        return(`You both had ${computerMove}s and killed eachother. It's a Tie`)
    }else if(computerMove == 'Gun'){
        computerPoints++
        return(`Somehow your clone managed to find a Gun. And it seems a ${playerMove} couldn't quite do it. You got shot square in the head.`)
    }else if(computerMove == 'Bow' && playerMove == 'Sword' || computerMove == 'Sword' && playerMove == 'Shield' || computerMove == 'Shield' && playerMove == 'Bow'){
        computerPoints++
        return(`Your clone had a ${computerMove} wich gave him the upper hand against your ${playerMove} and won the match. You died.`)
    }else if(playerMove == 'Gun'){
        playerPoints++
        return('You (somehow) brought a Gun to a Medieval match... you have no honor. After missing half the shots you mannaged to kill you clone. Hope you are happy.')
    }else {
        playerPoints++
        return(`You won fair and square with your ${playerMove} against your clone's ${computerMove}. The real one stands proud in the center of the arena. Good job.`)
    }
}

//This is the function that repeats the round 5 times. Pondering if it should be a best of 5 or not.
function playGame(){
for(let numbOfRounds = 0; numbOfRounds < 5; numbOfRounds++){
    console.log(playRound())
}
if (computerPoints > playerPoints){
    alert(`Your clone won the war. The clone died ${playerPoints} times. You died ${computerPoints} times`)
}else if (computerPoints < playerPoints){
    alert(`You won the war. The clone died ${playerPoints} times. You died ${computerPoints} times`)
}else{
    alert(`You both lay dead. The clone died ${playerPoints} times. You died ${computerPoints} times`)
}

}

playGame()
