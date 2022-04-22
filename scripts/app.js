//------------------------------------------------------------------------------------------
//PLAYERS DATA  
//------------------------------------------------------------------------------------------

let editedPlayerId; // Store which player editing
let activePlayer = 0;
const gameData = [ // this array represent the game field list tag <li>
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];
const players = [
  {
    name: "",
    symbol: "X"
  },
  {
    name: "",
    symbol: "O"
  }
];

//------------------------------------------------------------------------------------------
//SELECT ELEMENTS
//------------------------------------------------------------------------------------------
const backdropElement = document.getElementById("backdrop");
const overlayField = document.querySelector(".overlay-input-field");
const overlayInputForm = document.querySelector("form"); // there is no more form tag in this project
const errorsOutputElement = document.getElementById("errors-output");
const gamePlayField = document.querySelector(".game-play-field");
const activePlayerName = document.querySelector(".active-player-name");
const displayWinner = document.querySelector(".game-end-info");

// **** BUTTONS ****
const editPlayerOneBtn = document.getElementById("edit-player-1-btn");
const editPlayerTwoBtn = document.getElementById("edit-player-2-btn");
const cancelOverlayBtn = document.getElementById("cancel-btn");
const startNewGameBtn = document.getElementById("start-game-btn");
const gameFieldElement = document.querySelectorAll("#game-field li");


//------------------------------------------------------------------------------------------
//EVENT LISTENER
//------------------------------------------------------------------------------------------
// **** OPEN OVERLAY FIELD ****
editPlayerOneBtn.addEventListener("click", editBtn);
editPlayerTwoBtn.addEventListener("click", editBtn);

// **** CLOSE OVERLAY FIELD ****
cancelOverlayBtn.addEventListener("click", closeOverlayInput);
backdropElement.addEventListener("click", closeOverlayInput);

// **** FORM ****
overlayInputForm.addEventListener("submit", savePlayerConfig);

// **** START NEW GAME ****
startNewGameBtn.addEventListener("click", startNewGame);

// **** GAME FIELD ELEMENTS ****
for (const fieldElement of gameFieldElement) {
  fieldElement.addEventListener("click", selectGameField)
}