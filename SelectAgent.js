//create slider with 5 pics and change names on top as well.
//step1 on left click change array names and on right click change array names
const agentNames = [
  "Sova",
  "Breach",
  "Jett",
  "Brimstone",
  "Sage",
  "Phoenix",
  "Viper",
  "Omen",
  "Killjoy",
];

//player 1
const leftBtnP1 = document.querySelector(".leftP1");
const rightbtnP1 = document.querySelector(".rightP1");
const player1Name = document.querySelector(".player1Name");
const agent1Img = document.querySelector("#agent1Img");
const selectP1Btn = document.querySelector(".selectP1");
const player1Code = document.querySelector(".player1Code");

//player2
const leftBtnP2 = document.querySelector(".leftP2");
const rightbtnP2 = document.querySelector(".rightP2");
const player2Name = document.querySelector(".player2Name");
const agent2Img = document.querySelector("#agent2Img");
const selectP2Btn = document.querySelector(".selectP2");
const player2Code = document.querySelector(".player2Code");

const timer = document.querySelector(".timer");

let p1Selected = false;
let p2Selected = false;

//Changing Players name and pics on left right button click

function playerRightSlide(playerName, playerImg) {
  const rightNewLocation = agentNames.indexOf(playerName.innerHTML) + 1;

  if (rightNewLocation < agentNames.length) {
    playerName.innerHTML = agentNames[rightNewLocation];
    playerImg.src = `./img/Img${rightNewLocation}.png`;
    agentNumberLeft = rightNewLocation;
  } else {
    playerName.innerHTML = agentNames[0];
    playerImg.src = `./img/Img${0}.png`;
  }
}

function playerLeftSlider(playerName, playerImg) {
  let leftNewLocation = agentNames.indexOf(playerName.innerHTML);
  if (leftNewLocation === 0) {
    leftNewLocation = agentNames.length - 1;
    playerName.innerHTML = agentNames[leftNewLocation];
    playerImg.src = `./img/Img${leftNewLocation}.png`;
  } else {
    leftNewLocation--;
    playerName.innerHTML = agentNames[leftNewLocation];
    playerImg.src = `./img/Img${leftNewLocation}.png`;
  }
}

//hiding all buttons and agent name on clicking select button for agents
selectP1Btn.addEventListener("click", function () {
  hideBtn(leftBtnP1, rightbtnP1, player1Code);
  this.classList.add("hide");
  p1Selected = true;
  startGame();
});

selectP2Btn.addEventListener("click", function () {
  hideBtn(leftBtnP2, rightbtnP2, player2Code);
  this.classList.add("hide");
  p2Selected = true;
  startGame();
});

//countdown function
let min = 0;
let sec = 59;
function counting() {
  timer.innerHTML = `${min}:${sec}`;
  sec--;
  if (sec < 0 && min != 0) {
    min--;
    sec = 59;
  } else if (sec < 5 && sec > 1) {
    timer.classList.add("last5Sec");
  } else if (sec < 0 && min == 0) {
    clearInterval(count);
    window.location.href = "CardGame.html";
  }
}

//On selected both player open game

function startGame() {
  if (p1Selected && p2Selected) {
    min = 0;
    sec = 5;
  }
}

//Main code

//  calling functions to change players name and pics

//changing agents and agents name
rightbtnP1.addEventListener("click", function () {
  playerRightSlide(player1Name, agent1Img);
});

leftBtnP1.addEventListener("click", function () {
  playerLeftSlider(player1Name, agent1Img);
});

rightbtnP2.addEventListener("click", function () {
  playerRightSlide(player2Name, agent2Img);
});

leftBtnP2.addEventListener("click", function () {
  playerLeftSlider(player2Name, agent2Img);
});

//calling functions to hide buttons after click select
function hideBtn(leftBtn, rightBtn, playerCode) {
  leftBtn.style.display = "none";
  rightBtn.style.display = "none";
  playerCode.style.display = "none";
}

//Timer
const count = setInterval(counting, 1000);
