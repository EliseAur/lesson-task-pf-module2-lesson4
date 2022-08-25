// Programming Foundations - Module 2
// Lesson Task 4 Questions

// Question 1
// Declare and call a function that logs the string "What the func is this nonsense?"

function sentence(theSentence) {
    console.log(theSentence);
}

sentence("What the func is this nonsense?");

//or

function stupidSentence() {
    console.log("What the funk is this nonsense?");
}

stupidSentence();

// Question 2
// Create and call a function with two arguments, firstName and lastName.
// The function should log both the argument values with a space between them.

function fullName() {
    var firstName = "Elise";
    var lastName = "Aurtande";
    console.log(firstName + " " + lastName);
}

fullName();

//or

function logName(nameOne, nameTwo) {
    var totalName = nameOne + " " + nameTwo;
    console.log(totalName);
}

logName("Birger", "Aurtande");

// Question 3
// Create a function with two arguments, firstNumber and secondNumber.
// Inside the function, check the type of the arguments.
// If they are numbers, multiply them and return the result.
// If either of them are not numbers return the message: "Please supply number values".
// Call the function, assign the return value to a variable called result and log the variable.

function twoArguments(firstNumber, secondNumber) {
    typeOfNumOne = typeof firstNumber;
    typeOfNumTwo = typeof secondNumber;

    if (typeOfNumOne !== "number" || typeOfNumTwo !== "number") {
        return "Please supply number values.";
    }

    return firstNumber * secondNumber;
}

var result = twoArguments(3, false);
console.log(result);

// Question 4
// Create a function with three arguments.
// Try and convert each argument to a number.
// If any of the arguments cannot be converted to a number, return the message: "Invalid argument types".
// If all arguments are numbers or can be converted to numbers, add them all and return the result.
// Select the p element on the page and assign the result of the function call to be its innerHTML value.

function AddThreeNumbers(num1, num2, num3) {
    var convertNum1 = parseInt(num1);
    var convertNum2 = parseInt(num2);
    var convertNum3 = parseInt(num3);

    if (isNaN(convertNum1) || isNaN(convertNum2) || isNaN(convertNum3)) {
        return "Invalid argument types";
    }

    return convertNum1 + convertNum2 + convertNum3;
}

var resultAdding = AddThreeNumbers(5, 2, "hei");
console.log(resultAdding);

// Question 5
// Select the button with the class heading using document.querySelector.
// Create a function and assign it to the onclick property of the button.
// The function should select the h1 element on the page and update its innerHTML without replacing the existing value.
// After clicking once, the innerHTML value should be Functions: Updated.
// Clicking the button again would mean the heading reads: Functions: Updated: Updated

var buttonHeading = document.querySelector(".heading");
var heading = document.querySelector("h1");

function changeHeading() {
    heading.innerHTML = heading.innerHTML + ": Updated";
}

buttonHeading.onclick = changeHeading;

// Question 6
// Select the button with the class title.
// When this is button is clicked, update the title of the page
// (not the heading, the HTML page title visible in the browser tab) to read: I've been updated.
// Hint: use console.dir(document) to view the properties available on the document object.

var buttonTitle = document.querySelector(".title");

function changeDocTitle() {
    document.title = "I've been updated";
}

buttonTitle.onclick = changeDocTitle;

// Question 7
// Select the buttons with the classes red, orange and pink.
// Clicking on these buttons should change the background of the page to red, orange and pink respectively.

var buttonRed = document.querySelector(".red");
var buttonOrange = document.querySelector(".orange");
var buttonPink = document.querySelector(".pink");
var body = document.querySelector("body");

function changeBackgroundRed() {
    body.style.backgroundColor = "red";
}
buttonRed.onclick = changeBackgroundRed;

function changeBackgroundOrange() {
    body.style.backgroundColor = "orange";
}
buttonOrange.onclick = changeBackgroundOrange;

function changeBackgroundPink() {
    body.style.backgroundColor = "pink";
}
buttonPink.onclick = changeBackgroundPink;
