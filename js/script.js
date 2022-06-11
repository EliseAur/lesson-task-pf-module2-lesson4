//Question 1
//Declare and call a function that logs the string "What the func is this nonsense?"

function sentence() {
    console.log("What the func is this nonsense?");
}

sentence();

//or

function stupidSentence(stupid) {
    console.log(stupid);
}

stupidSentence("What the func is this nonsense?");

//Question 2
//Create and call a function with two arguments, `firstName` and `lastName`.
//The function should log both the argument values with a space between them.

function fullName(firstName, space, lastName) {
    console.log(firstName + space + lastName);
}

fullName("Elise", " ", "Aurtande");

//or

function logName(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    console.log(fullName);
}

logName("Randolph", "Reindeer");

//Question 3
//Create a function with two arguments, `firstNumber` and `secondNumber`.
//Inside the function, check the type of the arguments.
//If they are numbers, multiply them and return the result.
//If either of them are not numbers return the message: "Please supply number values".
//Call the function, assign the return value to a variable called `result` and log the variable.

function multiplyNumbers(firstNumber, secondNUmber) {
    //find out the type of the argument values
    var typeofFirstNumber = typeof firstNumber;
    var typeofSecondNumber = typeof secondNUmber;

    if (typeofFirstNumber !== "number" || typeofSecondNumber !== "number") {
        return "Please supply number values";
    }

    return firstNumber * secondNUmber;
}

var result = multiplyNumbers(20, 5);
console.log(result);

//Question 4
//Create a function with three arguments.
//Try and convert each argument to a number.
//If any of the arguments cannot be converted to a number, return the message: "Invalid argument types".
//If all arguments are numbers or can be converted to numbers, add them all and return the result.
//Select the `p` element on the page and assign the result of the function call to be its innerHTML value.

function addition(num1, num2, num3) {
    // try and convert all the arguments to number values
    var convertedNum1 = parseFloat(num1);
    var convertedNum2 = parseFloat(num2);
    var convertedNum3 = parseFloat(num3);

    // if any of the arguments cannot be converted to a number they will have the value NaN - Not a Number
    // check for a NaN value using isNaN()
    if (isNaN(convertedNum1) || isNaN(convertedNum2) || isNaN(convertedNum3)) {
        // as soon as a return statement is encountered the function will exit
        return "Invalid argument types";
    }

    return convertedNum1 + convertedNum2 + convertedNum3;
}

// select the p element
var paragraph = document.querySelector("p");

var sum = addition(6, 6, "6.6");

paragraph.innerHTML = sum;

//or
// paragraph.innerHTML = addition("rr", 5, true);

//Question 5
//Select the button with the class `heading` using `document.querySelector`.
//Create a function and assign it to the `onclick` property of the button.
//The function should select the `h1` element on the page and update its innerHTML without replacing the existing value.
//After clicking once, the innerHTML value should be `Functions: Updated`.
//Clicking the button again would mean the heading reads: `Functions: Updated: Updated`

var buttonChangeHeading = document.querySelector(".heading");
var headingOne = document.querySelector("h1");

function changeHeading() {
    headingOne.innerHTML += ": Updated";
}

buttonChangeHeading.onclick = changeHeading;

//or

/*
var buttonHeading = document.querySelector(".heading");

buttonHeading.onclick = function () {
    var heading = document.querySelector("h1");
    heading.innerHTML += ": Updated";
};
*/

//Question 6
//Select the button with the class `title`.
//When this is button is clicked, update the `title` of the `page` (not the heading, the HTML page title visible in the browser tab) to read: `I've been updated`.
//Hint: use `console.dir(document)` to view the properties available on the document object.

var buttonChangeTitle = document.querySelector(".title");
var title = document.querySelector("title");

function changeTitle() {
    title.innerHTML = "I've been updated";
}

buttonChangeTitle.onclick = changeTitle;

// or fasit:

var buttonTitle = document.querySelector(".title");

function changeTitle() {
    document.title = "I've been updated";
}

buttonTitle.onclick = changeTitle;

//Question 7
//Select the buttons with the classes `red`, `orange` and `pink`.
//Clicking on these buttons should change the background of the page to `red`, `orange` and `pink` respectively.

var redButton = document.querySelector(".red");
var orangeButton = document.querySelector(".orange");
var pinkButton = document.querySelector(".pink");
var body = document.querySelector("body");

function redBackground() {
    body.style.backgroundColor = "red";
}

redButton.onclick = redBackground;

function orangeBackground() {
    body.style.backgroundColor = "orange";
}

orangeButton.onclick = orangeBackground;

function pinkBackground() {
    body.style.backgroundColor = "pink";
}

pinkButton.onclick = pinkBackground;
