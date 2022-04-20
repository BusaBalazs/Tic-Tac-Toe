//------------------------------------------------------------------------------------------
//SELECT ELEMENTS
//------------------------------------------------------------------------------------------
const backdropElement = document.getElementById("backdrop");
const overlayField = document.querySelector(".overlay-input-field");
const overlayInputForm = document.querySelector("form"); // there is no more form tag in this project
const errorsOutputElement = document.getElementById("errors-output");

// **** BUTTONS ****
const editPlayerOneBtn = document.getElementById("edit-player-1-btn");
const editPlayerTwoBtn = document.getElementById("edit-player-2-btn");
const cancelOverlayBtn = document.getElementById("cancel-btn");


//------------------------------------------------------------------------------------------
//EVENT LISTENER
//------------------------------------------------------------------------------------------
// **** OPEN OVERLAY FIELD ****
editPlayerOneBtn.addEventListener("click", openOverlayInput);
editPlayerTwoBtn.addEventListener("click", openOverlayInput);

// **** CLOSE OVERLAY FIELD ****
cancelOverlayBtn.addEventListener("click", closeOverlayInput);
backdropElement.addEventListener("click", closeOverlayInput);

// **** FORM ****
overlayInputForm.addEventListener("submit", savePlayerConfig);