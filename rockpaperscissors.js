//create an array containing rock paper and scissors 
//create a funciton called getComputerChoice 
//have a random number generated 
//select the word in the array based on the random number chosen 
// this will randomly return rock, paper of sissors 


function game() {
  function getComputerChoice() {
    const compChoice = ["rock", "paper", "scissors"];
    let random = Math.floor((Math.random() * compChoice.length))
    let randomChoice = compChoice[random];
    return (randomChoice)
  }

  // const playerSelection = "rock"
  // let computerSelection = getComputerChoice();

  function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
      result = "You Lose! Paper beats Rock"
      console.log(result)
      return result
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
      result = "You Win! Rock beats Scissors"
      console.log(result)
      return result
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "rock") {
      result = "You both chose rock, its a stalemate"
      console.log(result)
      return result
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
      result = "You Win! Paper beats Rock"
      console.log(result)
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
      result = "You Lose! Scissors beats Paper"
      console.log(result)
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "paper") {
      result = "You both chose paper, its a stalemate"
      console.log(result)
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
      result = "You Lose! Rock beats Scissors"
      console.log(result)
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
      result = "You Win! Scissors beats Paper"
      console.log(result)
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "scissors") {
      result = "You both chose scissors, its a stalemate"
      console.log(result)
    }
  }

  let score = 0
  for (let round = 1; round <= 5; round++) {
    let playerSelection = prompt("Input your pick: rock, paper or scissors")
    let computerSelection = getComputerChoice()
    let result = playRound(playerSelection, computerSelection)
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors"
      || playerSelection.toLowerCase() === "paper" && computerSelection === "rock"
      || playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
      score++
    } else {
      score + 0;
    }
  } if (score >= 3) {
    console.log(`You won ${score} rounds, so you win the game!`)
  } else {
    console.log(`You only won ${score} round(s) so you didn't win the game! :(`)
  } 
}


