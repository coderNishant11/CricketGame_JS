let score = {
    win: 0,
    lost: 0,
    tie:0
}

function computerChoice() {
    let selctedNumber = Math.random() * 3
    if (selctedNumber <= 1) {
       return 'Bat'
    } else if (selctedNumber <= 2) {
        return 'Ball'
    } else if (selctedNumber <= 3) {
        return'Stump'
    }
    
}

function gameStatus() {
    document.querySelector('#gameStatus').innerText=`Game Status: won:${score.win} lost:${score.lost} tie:${score.tie}`
}
function bat() {
    let compChoice = computerChoice()
    let userChoice ='Bat'
    document.querySelector('#selection').innerText = 'Since You selected Bat and computer selected ' + compChoice;

    document.querySelector('#won').innerText = getResult(userChoice, compChoice)
    
    gameStatus()

}
function ball() {
    let compChoice = computerChoice()
    let userChoice='Ball'
    document.querySelector('#selection').innerText = `Since You selected Ball and computer selected ${compChoice}`
    document.querySelector('#won').innerText = getResult(userChoice, compChoice)
    
    // document.querySelector('#gameStatus').innerText=`Game Status: won:${score.win} lost:${score.lost} tie:${score.tie}`
    gameStatus()
}
function stump() {
    let compChoice = computerChoice()
    let userChoice='Stump'
    document.querySelector('#selection').innerText = `Since You selected Stump and computer selected ${compChoice}`
    document.querySelector('#won').innerText = getResult(userChoice, compChoice)
    

    // document.querySelector('#gameStatus').innerText=`Game Status: won:${score.win} lost:${score.lost} tie:${score.tie}`

    gameStatus()
}

function getResult(userChoice, compChoice) {
   
    if (userChoice == compChoice) {
        score.tie += 1;
        return "its a tie";
    } else if ((userChoice == 'Bat' && compChoice == 'Ball') || (userChoice == "Ball" && compChoice == "Stump") || (userChoice == "Stump" && compChoice == 'Bat')) {
        score.win += 1;
        return 'You won';
    } else {
        score.lost += 1;
        return 'Computer Won'
    }
        
}

