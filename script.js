
//these are some variables that it needs.
let computerMove
let playerMove
let playerPoints = 0
let computerPoints = 0
resultstext.textContent = `Chose a weapon.`  

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

const getPlayerChoice = document.querySelectorAll('button');
for(let i = 0; i < getPlayerChoice.length; i++){
    getPlayerChoice[i].addEventListener('click', () => {
            if(playerPoints == 5 || computerPoints == 5){
                computerPoints = 0
                playerPoints = 0
                winner.textContent = ' '
                computerP.textContent = `${computerPoints}`
                playerP.textContent = `${playerPoints}`
            }else if(getPlayerChoice[i].classList.contains('bow')){
                playerMove = 'Bow'
                resultstext.textContent = `${playRound()}`
            }else if(getPlayerChoice[i].classList.contains('shield')){
                playerMove = 'Shield'
                resultstext.textContent = `${playRound()}`
            }else if(getPlayerChoice[i].classList.contains('sword')){
                playerMove = 'Sword'
                resultstext.textContent = `${playRound()}`
            }
        })
    }
const secret = document.querySelector('#secret')
secret.addEventListener('click', () => {
    playerMove = 'Gun'
    alert('Where did you find that?')
    resultstext.textContent = `${playRound()}`
})

//these are the many outcomes that can come with a round including an extra one for gun vs gun, player using gun, and bot using gun.
function playRound(){
    getComputerChoice()
    if (computerMove == 'Gun' && playerMove == 'Gun'){
        return("Ok... thats proof that he is indeed your clone... you both are cowards. After missing all of your shots you both try to knock eachother out and manage to do so. It's a Tie... a pitifull Tie")
    }else if (computerMove == playerMove){
        return(`You both had ${computerMove}s and killed eachother. It's a Tie`)
    }else if(computerMove == 'Gun'){
        if(computerPoints == 4){
            computerPoints++
            computerP.textContent = `${computerPoints}`
            if(playerPoints == 1){
                winner.textContent = `Your clone won the war. The clone died ${playerPoints} times. You died ${computerPoints} time`
            }else{
                winner.textContent = `Your clone won the war. The clone died ${playerPoints} times. You died ${computerPoints} times`
            }
            return(`Somehow your clone managed to find a Gun. And it seems a ${playerMove} couldn't quite do it. You got shot square in the head.`)
        }else{
        computerPoints++
        computerP.textContent = `${computerPoints}`
        return(`Somehow your clone managed to find a Gun. And it seems a ${playerMove} couldn't quite do it. You got shot square in the head.`)
        }
    }else if(computerMove == 'Bow' && playerMove == 'Sword' || computerMove == 'Sword' && playerMove == 'Shield' || computerMove == 'Shield' && playerMove == 'Bow'){
        if(computerPoints == 4){
            computerPoints++
            computerP.textContent = `${computerPoints}`
            if(playerPoints == 1){
                winner.textContent = `Your clone won the war. The clone died ${playerPoints} times. You died ${computerPoints} time`
            }else{
                winner.textContent = `Your clone won the war. The clone died ${playerPoints} times. You died ${computerPoints} times`
            }
            return(`Your clone had a ${computerMove} wich gave him the upper hand against your ${playerMove} and won the match. You died.`)
        }else{
        computerPoints++
        computerP.textContent = `${computerPoints}`
        return(`Your clone had a ${computerMove} wich gave him the upper hand against your ${playerMove} and won the match. You died.`)
        }
    }else if(playerMove == 'Gun'){
        if(playerPoints == 4){
            playerPoints++
            playerP.textContent = `${playerPoints}`
            if(computerPoints == 1){
                winner.textContent = `You won the war. The clone died ${playerPoints} times. You died ${computerPoints} time`
            }else{
                winner.textContent = `You won the war. The clone died ${playerPoints} times. You died ${computerPoints} times`
            }
            return(`You (somehow) brought a Gun to a Medieval match... you have no honor. After missing half the shots you mannaged to kill you clone. Hope you are happy.`)
        }else{
        playerPoints++
        playerP.textContent = `${playerPoints}`
        return(`You (somehow) brought a Gun to a Medieval match... you have no honor. After missing half the shots you mannaged to kill you clone. Hope you are happy.`)
        }
    }else{
        if(playerPoints == 4){
            playerPoints++
            playerP.textContent = `${playerPoints}`
            if(computerPoints == 1){
                winner.textContent = `You won the war. The clone died ${playerPoints} times. You died ${computerPoints} time`
            }else{
                winner.textContent = `You won the war. The clone died ${playerPoints} times. You died ${computerPoints} times`
            }
            return(`You won fair and square with your ${playerMove} against your clone's ${computerMove}. The real one stands proud in the center of the arena. Good job.`)
        }else{
        playerPoints++
        playerP.textContent = `${playerPoints}`
        return(`You won fair and square with your ${playerMove} against your clone's ${computerMove}. The real one stands proud in the center of the arena. Good job.`)
        }
    }
}

const playerP = document.querySelector('#playerP')
playerP.textContent = `${playerPoints}`

const computerP = document.querySelector('#computerP')
computerP.textContent = `${computerPoints}`

const winner = document.querySelector('#winner')

//function playGame(){
//for(let numbOfRounds = 0; numbOfRounds < 5; numbOfRounds++){
//    console.log(playRound())
//}
//if (computerPoints > playerPoints){
//    alert(`Your clone won the war. The clone died ${playerPoints} times. You died ${computerPoints} times`)
//}else if (computerPoints < playerPoints){
//    alert(`You won the war. The clone died ${playerPoints} times. You died ${computerPoints} times`)
//}else{
//    alert(`You both lay dead. The clone died ${playerPoints} times. You died ${computerPoints} times`)
//}
//}


