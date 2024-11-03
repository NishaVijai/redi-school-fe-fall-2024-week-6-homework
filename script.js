console.log("Week 6 - homework - Hand-in assignment 2");

// Week 6 - homework - Hand-in assignment 2
// A. Let’s improve our counter
// a. Disable the ‘-’ button whenever the counter reaches 0 (keep in mind that it only should be disabled if the counter is on 0)
// b. Add a span element saying “You have free shipping” whenever the counter reaches 10
// c. Change the ‘+’ button’s background to red whenever the counter reaches 20

// B. Bonus
// a. Remove the Free shipping span whenever the counter reaches 9, or if it reaches 20
// b. Additionally, whenever it reaches 20, add a span saying “Out of stock”

const mainElement = document.querySelector("main");
const createNewOuterDivElement = document.createElement("div");
mainElement.appendChild(createNewOuterDivElement);

const createFirstInnerDivElement = document.createElement("div");
createNewOuterDivElement.appendChild(createFirstInnerDivElement);

const createSecondInnerDivElement = document.createElement("div");

createNewOuterDivElement.classList.add("div_outer_container", "flex-container");
createFirstInnerDivElement.classList.add("div_first_inner_container", "flex-container");
createSecondInnerDivElement.classList.add("div_second_inner_container", "flex-container");

const createPElementToDisplayResult = document.createElement("p");
createPElementToDisplayResult.classList.add("display_result", "flex-container");

const createPlusButton = document.createElement("button");
const createMinusButton = document.createElement("button");
const createResetButton = document.createElement("button");

createFirstInnerDivElement.appendChild(createPElementToDisplayResult);

createFirstInnerDivElement.appendChild(createSecondInnerDivElement);
createSecondInnerDivElement.appendChild(createPlusButton);
createSecondInnerDivElement.appendChild(createMinusButton);
createSecondInnerDivElement.appendChild(createResetButton);

let displayValue = 0;
const RESET_VALUE = 0;
const TOP_LIMIT_VALUE = 20;
const value10 = 10;

const updateDisplayCountValue = () => createPElementToDisplayResult.textContent = `${displayValue}`;

updateDisplayCountValue();

createPlusButton.textContent = "+";
createMinusButton.textContent = "-";
createResetButton.textContent = "Reset";

// ---------------------------------------------
// a. Disable the ‘-’ button whenever the counter reaches 0 (keep in mind that it only should be disabled if the counter is on 0)
const disableMinusButton = () => {
  if (displayValue === 0) {
    return createMinusButton.setAttribute("disabled", true);
  }

  return createMinusButton.removeAttribute("disabled", true);
};

disableMinusButton();

// b. Add a span element saying “You have free shipping” whenever the counter reaches 10
const createSpanElement = document.createElement("span");
createFirstInnerDivElement.appendChild(createSpanElement);

let updateSpanText = "No free shipping available";
createSpanElement.textContent = `${updateSpanText}`;

// c. Change the ‘+’ button’s background to red whenever the counter reaches 20
const changeButtonsBackgroundColor = () => {
  if (displayValue === TOP_LIMIT_VALUE) {
    return createPlusButton.style.backgroundColor = "red";
  }

  return createPlusButton.style.backgroundColor = "";
};

// B. Bonus
// a. Remove the Free shipping span whenever the counter reaches 9, or if it reaches 20
// b. Additionally, whenever it reaches 20, add a span saying “Out of stock”
const updateSpanContent = () => {
  if (displayValue >= value10) {
    updateSpanText = "You have FREE shipping";
    createSpanElement.textContent = `${updateSpanText}`;
  }

  if (displayValue < value10 || displayValue === RESET_VALUE) {
    updateSpanText = "No free shipping available";
    createSpanElement.textContent = `${updateSpanText}`;
  }

  if (displayValue >= TOP_LIMIT_VALUE) {
    updateSpanText = "Out of stock";
    createSpanElement.textContent = `${updateSpanText}`;
  }

  return createSpanElement.textContent;
};
// ---------------------------------------------

const resetDisplayCountValue = () => {
  displayValue = RESET_VALUE;

  updateDisplayCountValue();
  updateSpanContent();
  changeButtonsBackgroundColor();
  disableMinusButton();

  return displayValue;
};

const addCountValue = (num) => {
  if (displayValue >= TOP_LIMIT_VALUE) {
    updateSpanContent();
    changeButtonsBackgroundColor();
    console.log(`Value is ${displayValue}, you  have reached the top limit value - ${TOP_LIMIT_VALUE} can not increase the number anymore!`);
    alert(`Value is ${displayValue}, you  have reached the top limit value - ${TOP_LIMIT_VALUE} can not increase the number anymore!`);
  }
  else {
    displayValue = displayValue + num;
    updateDisplayCountValue();
    updateSpanContent();
    changeButtonsBackgroundColor();
    disableMinusButton();
  }

  return displayValue;
};

const subtractCountValue = (num) => {
  if (displayValue > 0) {
    updateSpanContent();
    changeButtonsBackgroundColor();
    displayValue = displayValue - num;
  }
  else {
    console.log(`Value is ${displayValue}, you can not decrease the number anymore!`);
    alert(`Value is ${displayValue}, you can not decrease the number anymore!`);
  }

  updateDisplayCountValue();
  updateSpanContent();
  changeButtonsBackgroundColor();
  disableMinusButton();

  return displayValue;
};

createPlusButton.addEventListener("click", () => { addCountValue(1); }, false);
createMinusButton.addEventListener("click", () => { subtractCountValue(1); }, false);
createResetButton.addEventListener("click", () => { resetDisplayCountValue(); }, false);
// ---------------------------------------------
