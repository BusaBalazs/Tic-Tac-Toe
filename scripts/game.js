//------------------------------------------------------------------------------------------
//START NEW GAME
//------------------------------------------------------------------------------------------
const startNewGame = () => {
  if (players[0].name === "" || players[1].name === "") { // Check if both players added name
    alert("Please set custom player names for both players!");
    return;
  };
  gamePlayField.style.display = "block";
  setTimeout(() => { // use setTimeout() method because I want to add that class after the function switch the display to block. So We can see the transition of class
    gamePlayField.classList.add("show");
  }, 50);
  for (const element of gameFieldElement) {
    element.textContent = "";
    element.classList.remove("disable");
  };
  activePlayerName.textContent = players[0].name;
}

//------------------------------------------------------------------------------------------
//GAME PLAY
//------------------------------------------------------------------------------------------
// **** SET ACTIVE PLAYER AND SET NAME*****
const switchPlayer = () => {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  activePlayerName.textContent = players[activePlayer].name;
}

// **** CLICK GAME FIELD ELEMENT *****
const selectGameField = event => {
  event.target.textContent = players[activePlayer].symbol; //check which player on field with activePlayer variable and depend on which symbol will be setted.
  event.target.classList.add("disable");
  switchPlayer();
}