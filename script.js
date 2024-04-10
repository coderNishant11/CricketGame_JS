
let compChoice = computerChoice()
let score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    lost: 0,
    tie: 0
};

score.gameStatus= function () {
    localStorage.setItem('score', JSON.stringify(score))
    return  document.querySelector('#gameStatus').innerText=`Game Status: won:${score.win} lost:${score.lost} tie:${score.tie}`
}

//initial State
document.querySelector('#gameStatus').innerText = `Game Status: won:${score.win} lost:${score.lost} tie:${score.tie}`



function newGame() {

    localStorage.clear()
   console.log('cleared')
   console.log(score)
    score = {
        
        ...score,
        win: 0,
        lost: 0,
        tie: 0,
    }
    score.gameStatus();
    document.querySelector('#selection').innerText = 'Opt what you want';
    document.querySelector('#won').innerText = ''
    
    
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

function selection(userChoice) {
    let compChoice=computerChoice()
    document.querySelector('#selection').innerText = `Since You selected ${userChoice} and computer selected ${compChoice}`
    document.querySelector('#won').innerText = getResult(userChoice, compChoice)
    score.gameStatus()
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

// function bat() {
    
//     let userChoice ='Bat'
//     document.querySelector('#selection').innerText = 'Since You selected Bat and computer selected ' + compChoice;

//     document.querySelector('#won').innerText = getResult(userChoice, compChoice)
    
//     score.gameStatus()

// }

// function stump() {
//     let userChoice='Stump'
//     document.querySelector('#selection').innerText = `Since You selected Stump and computer selected ${compChoice}`
//     document.querySelector('#won').innerText = getResult(userChoice, compChoice)
    

//     // document.querySelector('#gameStatus').innerText=`Game Status: won:${score.win} lost:${score.lost} tie:${score.tie}`

//     score.gameStatus()
// }






// storing data to browser local storage
//localStorage.setItem('score', JSON.stringify(score))
