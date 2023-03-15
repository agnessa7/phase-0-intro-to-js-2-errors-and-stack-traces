// Fix the error in the snackSelection code snippet first

const snackSelection = 'Pretzels';

if (snackSelection === 'Pretzels') {
  console.log("That'll be $1, please!");
}
//changed "=" in the if statement to "==="

// Once the code above this line is fixed you'll be able to see the error from the code below

function first () {
  second();
}

function second () {
  third();
}

function third() {
  console.log("Now I'm a function!");
}
//declared third() as a function
first();
