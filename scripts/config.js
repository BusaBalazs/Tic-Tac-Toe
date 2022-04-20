//------------------------------------------------------------------------------------------
//MANAGE OVERLAY INPUT FIELD AND PLAYER CONFIGURATIONS ISSUE
//------------------------------------------------------------------------------------------

// **** OVERLAY INPUT FILED *****
const openOverlayInput = () => {
  overlayField.style.display = "block";
  backdropElement.style.display = "block";
}

const closeOverlayInput = () => {
  overlayField.style.display = "none";
  backdropElement.style.display = "none";
}

// **** CONFIRM BUTTON *****
const savePlayerConfig = event => {
  event.preventDefault();
  const formatData = new FormData(event.target);
  const enteredPlayerName = formatData.get("playername").trim(); // trim method delete the white space before/after the string content e.g. "     Player Name      " => "Player Name". If string inculde just white space then return an empty string e.g. "       " => ""

  if (!enteredPlayerName) { // this same as enteredPlayerName === ""
    errorsOutputElement.textContent = "Please enter a valid name!";
    return;
  }
}