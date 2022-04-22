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

  // Reset gameData
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
    }
  }
  //Reset displayWinner
  displayWinner.style.display = "none";

  //Reset activePlayer
  activePlayer = 0;
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
  const actualField = event.target;
  //Determine which game field element <li> was clicked by players
  const actualCol = actualField.dataset.col - 1;
  const actualRow = actualField.dataset.row - 1;
  if (gameData[actualRow][actualCol] > 0) {
    return;
  }
  actualField.textContent = players[activePlayer].symbol; //check which player on field with activePlayer variable and depend on which symbol will be setted.
  actualField.classList.add("disable");

  gameData[actualRow][actualCol] = activePlayer + 1; // increase by 1 the activePlayer hence we got player 1 and player 2
  const winner = gameEnd();
  if (winner === 1) {
    displayWinner.style.display = "block";
    displayWinner.firstElementChild.firstElementChild.textContent = players[0].name;
  }else if (winner === 2) {
    displayWinner.style.display = "block";
    displayWinner.firstElementChild.firstElementChild.textContent = players[1].name;
  }
  switchPlayer();
  console.log(gameData);
}

// **** GAME END *****
const gameEnd = () => {
  //Check the row
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0]
    }
  };

    //Check the column
    for (let i = 0; i < 3; i++) {
      if (
        gameData[0][i] > 0 &&
        gameData[0][i] === gameData[1][i] &&
        gameData[1][i] === gameData[2][i]
      ) {
        return gameData[0][i]
      }
    };

    //Check from top left to bottom right
    if (
      gameData[0][0] > 0 &&
      gameData[0][0] === gameData[1][1] &&
      gameData[1][1] === gameData[2][2]
    ) {
      return gameData[0][0];
    }

    //Check from botto left to top right
    if (
      gameData[2][0] > 0 &&
      gameData[2][0] === gameData[1][1] &&
      gameData[1][1] === gameData[0][2]
    ) {
      return gameData[2][0];
    }

  return 0;
}