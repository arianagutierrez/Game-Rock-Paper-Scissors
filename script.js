const scoreDisplay = document.querySelector('#score');
const playAgainButton = document.getElementById('play-again');

const userChoiceDisplay = document.createElement('h1');
userChoiceDisplay.id = 'move';
const computerChoiceDisplay = document.createElement('h1');
computerChoiceDisplay.id = 'move';
const resultDisplay = document.createElement('h1');

const resultGrid = document.getElementById('scoreD');
const playerGrid = document.getElementById('player');
const computerGrid = document.getElementById('computer');

resultGrid.append(resultDisplay); //to add the resultDisplay to the resultGrid.
playerGrid.append(userChoiceDisplay);
computerGrid.append(computerChoiceDisplay);

// display initial text
userChoiceDisplay.innerHTML = 'Player ';
computerChoiceDisplay.innerHTML = 'Computer ';
resultDisplay.innerHTML = 'Ready?';

const choices = ['rock', 'paper', 'scissors']
let userChoice
let computerChoice
let score = { player: 0, computer: 0 }

// scoreDisplay 0 - 0
const updateScore = () => {
  scoreDisplay.textContent = `${score.player} - ${score.computer}`;
  if (score.player === 5) {
    resultDisplay.innerHTML = 'Congratulations! You won!';
    disableButtons();
    playAgainButton.style.display = 'block';
  } else if (score.computer === 5) {
    resultDisplay.innerHTML = 'Computer wins! Try again!';
    disableButtons();
    playAgainButton.style.display = 'block';
  }
}

// PlayAgain button
playAgainButton.addEventListener('click', () => {
  // Reimposta lo stato del gioco e riavvialo
  score.player = 0;
  score.computer = 0;
  scoreDisplay.textContent = `0 - 0`;
  userChoiceDisplay.innerHTML = 'Player ';
  computerChoiceDisplay.innerHTML = 'Computer ';
  resultDisplay.innerHTML = 'Ready?';
  enableButtons(); // Riabilita i pulsanti del giocatore
  playAgainButton.style.display = 'none'; 
});

const disableButtons = () => {
  const buttons = document.querySelectorAll('.button3'); // Seleziona tutti i pulsanti del giocatore
  
  // Disabilita ciascun pulsante del giocatore
  buttons.forEach(button => {
    button.disabled = true;
  });
}

const enableButtons = () => {
  const buttons = document.querySelectorAll('.button3');

  // Abilita ciascun pulsante del giocatore
  buttons.forEach(button => {
    button.disabled = false;
  });
}

//player's choice
const handleClick = (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = 'Player: ' + userChoice //add to HTML the user's choice
  
  generateComputerChoice()
  
  const result = playRound(userChoice, computerChoice)
  resultDisplay.innerHTML = result

  updateScore();
}

// set the computer's choice
const generateComputerChoice = () => {
  const randomChoice = choices[Math.floor(Math.random() * choices.length)]
  computerChoice = randomChoice
  computerChoiceDisplay.innerHTML = 'Computer: ' + computerChoice //add to HTML the computer's choice
}

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return 'ITS A DRAW!'
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    score.player += 1
    return 'YOU WIN!'
  } else {
    score.computer += 1
    return 'YOU LOSE!'
  }
}

const div = document.createElement('div');
div.className = 'div';

//-----------------------------------------------
const div1 = document.createElement('div');
div1.className = 'btns';

//rock image
const rock = document.createElement('img');
rock.id = 'rock-img';
rock.src = 'images/rock.png';
rock.style.width = '100%';
rock.style.height = '70%';
div1.appendChild(rock);

//rockButton
const rBtn = document.createElement('button');
rBtn.className = 'button3 rBtn';
rBtn.id = choices[0];
rBtn.innerHTML = choices [0];

rBtn.addEventListener('click', handleClick);
rBtn.addEventListener('click', playSound);

div1.appendChild(rBtn);
div.appendChild(div1);

//-----------------------------------------------
const div2 = document.createElement('div');
div2.className = 'btns';

//paper image
const paper = document.createElement('img');
paper.id = 'paper-img';
paper.src = 'images/paper.png';
paper.style.width = '100%';
paper.style.height = '70%';
div2.appendChild(paper);

//paperButton
const pBtn = document.createElement('button');
pBtn.className = 'button3';
pBtn.id = choices[1];
pBtn.innerHTML = choices [1];

pBtn.addEventListener('click', handleClick);
pBtn.addEventListener('click', playSound);

div2.appendChild(pBtn);
div.appendChild(div2);

//-----------------------------------------------
const div3 = document.createElement('div');
div3.className = 'btns';

//scissors image
const scissors = document.createElement('img');
scissors.id = 'scissors-img';
scissors.src = 'images/scissors.png';
scissors.style.width = '100%';
scissors.style.height = '70%';
div3.appendChild(scissors);

//scissorsButton
const sBtn = document.createElement('button');
sBtn.className = 'button3';
sBtn.id = choices[2];
sBtn.innerHTML = choices [2];

sBtn.addEventListener('click', handleClick);
sBtn.addEventListener('click', playSound);

div3.appendChild(sBtn);
div.appendChild(div3);
//-----------------------------------------------

playerGrid.appendChild(div); //to add the div that includes the images and buttons in the playerGrid


// HERE is another shorter way to create the buttons, but in this way it's complicated to add an image to each button:

// //- PLAYER
// for (let i = 0; i < choices.length; i++) { //select the three buttons
//   const rock = document.createElement('img');
//   rock.src = 'images/rock.png';
//   playerGrid.appendChild(rock);

//   const paper = document.createElement('img');
//   paper.src = 'images/paper.png';
//   playerGrid.appendChild(paper);

//   const scissors = document.createElement('img');
//   scissors.src = 'images/scissors.png';
//   playerGrid.appendChild(scissors);

//   const button = document.createElement('button') // add the buttons to HTML
//   button.className = 'button3'
//   button.id = choices[i] // Viene impostato l'attributo id del pulsante con il valore corrente dell'array 'choices'. you can delete this if you want to use 'e.target.HTML' in the handleClick

//   button.innerHTML = choices[i] //il testo mostrato all'interno del pulsante.
//   button.addEventListener('click', handleClick)
//   button.addEventListener('click', playSound)

//   playerGrid.appendChild(button) // to add button to the playerGrid.
// }

// //- COMPUTER
// for (let i = 0; i < choices.length; i++) {
//   const button = document.createElement('button')
//   button.className = 'button3'
//   button.id = choices[i]

//   button.innerHTML = choices[i]
//   button.addEventListener('click', playSound)
  
//   computerGrid.appendChild(button)
// }

const divC = document.createElement('div');
divC.className = 'div';

//-----------------------------------------------
const div1C = document.createElement('div');
div1C.className = 'btns';

//rock image
const rockC = document.createElement('img');
rockC.id = 'rock-img';
rockC.src = 'images/rock.png';
rockC.style.width = '100%';
rockC.style.height = '70%';
div1C.appendChild(rockC);

//rockButton
const rBtnC = document.createElement('button');
rBtnC.className = 'button3';
rBtnC.id = choices[0];
rBtnC.innerHTML = choices [0];

rBtnC.addEventListener('click', playSound);

div1C.appendChild(rBtnC);
divC.appendChild(div1C);

//-----------------------------------------------
const div2C = document.createElement('div');
div2C.className = 'btns';

//paper image
const paperC = document.createElement('img');
paperC.id = 'paper-img';
paperC.src = 'images/paper.png';
paperC.style.width = '100%';
paperC.style.height = '70%';
div2C.appendChild(paperC);

//paperButton
const pBtnC = document.createElement('button');
pBtnC.className = 'button3';
pBtnC.id = choices[1];
pBtnC.innerHTML = choices [1];

pBtnC.addEventListener('click', playSound);

div2C.appendChild(pBtnC);
divC.appendChild(div2C);

//-----------------------------------------------
const div3C = document.createElement('div');
div3C.className = 'btns';

//scissors image
const scissorsC = document.createElement('img');
scissorsC.id = 'scissors-img';
scissorsC.src = 'images/scissors.png';
scissorsC.style.width = '100%';
scissorsC.style.height = '70%';
div3C.appendChild(scissorsC);

//scissorsButton
const sBtnC = document.createElement('button');
sBtnC.className = 'button3';
sBtnC.id = choices[2];
sBtnC.innerHTML = choices [2];

sBtnC.addEventListener('click', playSound);

div3C.appendChild(sBtnC);
divC.appendChild(div3C);
//-----------------------------------------------

computerGrid.appendChild(divC);

//title of the page
let txt = 'ROCK PAPER SCISSORS';
let e = 0;
let speed = 50;

function typeWriter() { //function for title animation
  if (e < txt.length) {
      document.getElementById("title").innerHTML += txt.charAt(e);
      e++;
      setTimeout(typeWriter, speed);
  }
}

// To play a sound audio on click
function playSound() {
  const buttonPress = document.querySelector("#startbuttonsound");
  buttonPress.play();
}

//sound for the STAR button
mainButton = document.querySelector("#startbutton").addEventListener("click", playSound);

// To hide START div and show END div
let startContainer = document.getElementById('startcontainer');
let btn = document.querySelector("#startbutton");

btn.addEventListener('click', function(){
  startContainer.style.opacity = 0;
  startContainer.style.transform = 'scaleY(-25)';

  // Add timeout with length matching animation-duration 
  window.setTimeout(function(){
      startContainer.style.display = 'none';
  }, 8);

  setTimeout(() => {  typeWriter(); }, 15);
});