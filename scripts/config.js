//------------------------------------------------------------------------------------------
//MANAGE OVERLAY INPUT FIELD AND PLAYER CONFIGURATIONS ISSUE
//------------------------------------------------------------------------------------------

// **** OVERLAY INPUT FILED *****
const editBtn = event => {
  editedPlayerId = +event.target.dataset.playerid; // convert the string to a number with + at the beginig of the declaration
  overlayField.style.display = "block";
  backdropElement.style.display = "block";
}

// **** RESET INPUT VALUE *****
const resetInputValue = () => {
  overlayInputForm.firstElementChild.children[1].value = ""; //acces the input of form tag and set the value empty
}

const closeOverlayInput = () => {
  overlayField.style.display = "none";
  backdropElement.style.display = "none";
  resetInputValue();
}

// **** CONFIRM BUTTON *****
const savePlayerConfig = event => {
  event.preventDefault();
  const formatData = new FormData(event.target);
  const enteredPlayerName = formatData.get("playername").trim(); // trim method delete the white space before/after the string content e.g. "     Player Name      " => "Player Name". If string inculde just white space then return an empty string e.g. "       " => ""

  if (!enteredPlayerName) { // this same as enteredPlayerName === ""
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Please enter a valid name!";
    setTimeout(() => {
      overlayInputForm.firstElementChild.classList.remove("error");
      errorsOutputElement.textContent = "";
      resetInputValue();
    }, 1000)
    return;
  }

  const editPlayerName = document.getElementById(`player-${editedPlayerId}-data`); //with the editedPlayerId variable changes the selection of which name of players should be replace 
  editPlayerName.children[1].textContent = enteredPlayerName;

  players[editedPlayerId - 1].name = enteredPlayerName;
  closeOverlayInput(); //when click submit that function will close automaticly 
  resetInputValue();
}