/*
  Copyright (c) 2023 Promineo Tech
  Author:  Promineo Tech Academic Team
  Subject:  Variables and Operations Lab
  FE JS1 Lab
*/

/** Key Terms:
 *  JavaScript
 *  GUI (Graphic User Interface)
 *  CLI (Command Line Interface)
 *  Variable
 *  Data Types:
 *   - String
 *   - Number
 *   - Boolean
 *   - Array
 *   - Undefined
 *   - Object
 *   - BigInt
 *   - Null
 *   - Symbol
 *  Method
 *  Git
 *  Source Control
 *  Operators
 *  console.log()
 * 
*/

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so. 
// Read the comments and add your code where it is specified for each question. 
/* ----------------------------------------------------- */

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 1. Creating & 'console.log()'ing variables \n`);


/**
 * Instruction: Create a variable for each step, then print that variable 
 *              to the console in the correct section.
 *
 * Step 1: Create a variable to hold the quantity of available seats left on a flight.
 * Step 2: Create a variable to hold the cost of groceries at checkout
 * Step 3: Create a variable to hold a person's middle initial
 * Step 4: Is it Hot Outside?
 *         Create a variable to hold a boolean, true if it's hot outside, false if it's not hot outside.
 * Step 5: Create a variable to hold a customer's first name.
 * Step 6: Create a variable to hold a street address.
 * ↓ YOUR CODE HERE ↓ */

console.log("Step 1:  Number of Seats on a Plane");
var availableFlightSeats = 7;
console.log(availableFlightSeats);
console.log("The number of seats left on this plane are " + availableFlightSeats)

console.log("Step 2:  Cost of Groceries");
var costOfGroceries = 52.35;
console.log("The cost of the groceries is $" + costOfGroceries);


console.log("Step 3:  Middle Initial");
var middleInitial = "M";
console.log("Your middle initial is " + middleInitial);

console.log("Step 4:  Is it Hot Outside?");
var isItHotOutside = false;
console.log("Is it hot outside " + isItHotOutside);

console.log("Step 5:  First Name");
var firstName = "Chris"
console.log(firstName);
console.log(" Your first name is " + firstName);
;
console.log("Step 6:  Street Address");
var streetAddress = "112 Vincent Drive Verona, Pa 15147";
console.log("My street address is " + streetAddress);


/*-------------------------------------------------------*/

console.log(`--------------------------
Question 2. Creating & 'console.log()'ing variables \n`);
 

/** 
 * Instruction: Use the variables we just created to solve the problems below.
 *              Print your answers to the console.
 * 
 *
 * */

    console.log('Remove Plane Seats:')
//	A customer booked 2 plane seats. Remove 2 seats from the available seats variable
//  ↓ YOUR CODE HERE ↓

console.log("There has been 2 seats booked, current seat available are " + ( availableFlightSeats - 2) + " seats left" );

    console.log('Buy a Candy Bar:')
//	Impulse candy bar purchase! Add 2.15 to the grocery total
//  ↓ YOUR CODE HERE ↓
var candyBar = 2.15
console.log("Someoen added a candy bar in my cart, the new total is " +  (costOfGroceries + 2.15)) ;

    console.log('Fix a Birth Certificate:')
//	A birth certificate was printed incorrectly, change the middle initial to something else
//  ↓ YOUR CODE HERE ↓
middleInitial = "J";
console.log("Oops! Middle initial is now "+ middleInitial);


    console.log('Changing Seasons:')
//	The season has changed, update the hot outside variable	to be opposite of what it was
//  ↓ YOUR CODE HERE ↓
isItHotOutside = !isItHotOutside;
console.log(isItHotOutside) ;   

    console.log('Full Name:')
//	Create a new variable called full name using the customer's
//  first name, the middle initial, and a last name of your choice
//  ↓ YOUR CODE HERE ↓
var fullName = firstName + middleInitial + "Jacobs"
console.log("My full name is " + fullName);

    console.log('Introduce a Customer:')
//	Print a line to the console that introduces the customer 
//	including the name, and saying that they live at the address variable
//  ↓ YOUR CODE HERE ↓

console.log("Welcome our new customer" + fullName + " Who lives at: " + streetAddress);

    console.log('-----------Finished------------')