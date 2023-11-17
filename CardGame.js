//Code Start
const mainCardBox = document.querySelector(".mainCardBox");
const p1liveScore = document.querySelector(".p1liveScore");
const p2liveScore = document.querySelector(".p2liveScore");

let player1Score = 0;
let player2Score = 0;
let currentPlayer = 1;

//Activity
//Creating 52 cards then shuffling it
const deckOfCards = [];
const cardTypes = ["clubs", "diamonds", "hearts", "spades"];
const cardNumbers = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
];

for (let a = 0; a < cardTypes.length; a++) {
  for (let i = 0; i < cardNumbers.length; i++) {
    const card = {
      type: cardTypes[a],
      number: cardNumbers[i],
    };
    deckOfCards.push(card);
  }
}

let i = deckOfCards.length;
let j;
let temp;
while (--i > 0) {
  j = Math.floor(Math.random() * (i + 1));
  temp = deckOfCards[j];
  deckOfCards[j] = deckOfCards[i];
  deckOfCards[i] = temp;
}
// console.log(deckOfCards)
//Creating divs and classes
for (let index = 0; index < 52; index++) {
  const flipCard = document.createElement("div");
  flipCard.classList.add("flipCard");
  const flipCardInner = document.createElement("div");
  flipCardInner.classList.add("flipCardInner");
  const flipCardFront = document.createElement("div");
  flipCardFront.classList.add("flipCardFront");

  const cardImage = document.createElement("img");
  cardImage.src = "./img/Card Background.jpg"; // Replace with your image path
  cardImage.alt = "Card Image";
  cardImage.classList.add("card-image"); // Add your desired class

  flipCardFront.appendChild(cardImage);
  const flipCardBack = document.createElement("div");
  flipCardBack.classList.add("flipCardBack");
  const cardData = deckOfCards[index].type + " " + deckOfCards[index].number;
  flipCardBack.innerHTML = `${cardData}`;
  mainCardBox.appendChild(flipCard);
  flipCard.appendChild(flipCardInner);
  flipCardInner.appendChild(flipCardFront);
  flipCardInner.appendChild(flipCardBack);
}

const flipCardInnerList = document.querySelectorAll(".flipCardInner");
const openDeckCards = [];

//Functions

//function which add flip card to flipCardInner to card flip when someone click it
//Two
function toggleFlip(flipCardInner) {
  if (!flipCardInner.classList.contains("flip")) {
    flipCardInner.classList.add("flip");
    const flipCardBack = flipCardInner.querySelector(".flipCardBack");
    cardChecking(flipCardBack);
  }
}
//function to check if they match it or not
//three
function cardChecking(flipCardBack) {
  const mainNumber = flipCardBack.textContent.split(" ")[1];

  if (openDeckCards.includes(mainNumber)) {
    console.log("Match");
    flipCardBack.classList.add("match");
    lastCard = document.getElementById(mainNumber);
    lastCard.classList.add("match");
    lastCard.removeAttribute("id");
    for (let index = 0; index < openDeckCards.length; index++) {
      if (openDeckCards[index] === mainNumber) {
        openDeckCards.splice(index, 1);
        break;
      }
    }
    // console.log(openDeckCards);

    if (currentPlayer === 1) {
      player1Score++;
      p1liveScore.innerHTML = player1Score;
      // console.log("Player 1 score:", player1Score);
    } else if (currentPlayer === 2) {
      player2Score++;
      p2liveScore.innerHTML = player2Score;
      // console.log("Player 2 score:", player2Score);
    }

    if (player1Score + player2Score === 26) {
      function displayResultPopup(player1Score, player2Score) {
        const modal = document.getElementById("resultModal");
        const resultMessage = document.getElementById("resultMessage");

        if (player1Score > player2Score) {
          resultMessage.textContent = "Player 1 Wins!";
        } else if (player1Score < player2Score) {
          resultMessage.textContent = "Player 2 Wins!";
        } else if (player1Score === player2Score) {
          resultMessage.textContent = "It's a Draw!";
        }

        modal.style.display = "block";

        function closeModal() {
          modal.style.display = "none";
        }

        const closeBtn = document.querySelector(".close");
        closeBtn.addEventListener("click", closeModal);

        window.addEventListener("click", function (event) {
          if (event.target === modal) {
            closeModal();
          }
        });
      }

      displayResultPopup(player1Score, player2Score);
      //   if (player1Score > player2Score) {
      //     console.log("Player 1 win");
      //   } else if (player1Score < player2Score) {
      //     console.log("Player 2 win");
      //   } else if (player1Score === player2Score) {
      //     console.log("Draw");
      //   }
    }
  } else {
    openDeckCards.push(mainNumber);
    flipCardBack.setAttribute("id", `${mainNumber}`);
  }
}

//adding events on clicking a card
//One
flipCardInnerList.forEach((flipCardInner) => {
  flipCardInner.addEventListener("click", () => {
    toggleFlip(flipCardInner);
    currentPlayer = currentPlayer === 1 ? 2 : 1;
  });
});
