======== Random Number Generator ===============

Your task is to build an application that:

Takes input for a starting number and an ending number.
Generates a random number between (and including) those two numbers upon a button click.
Displays the generated random number or appropriate error messages based on input validation.
Remember, in React, when working with user inputs and displaying dynamic data, you'll most likely be dealing with component state. You'll need to update this state every time the input values change or when the random number needs to be generated.


=> Quick Start
Follow the below steps to run the project.

1. Clone repository
2. Run npm i command to install dependencies
3. Execute npm start command to run the project

Challenges
Challenge 1: Input Elements
Ensure you create two input elements of type number. One should have the ID startRange and the other should have the ID endRange.

Challenge 2: Generate Button and Display Element
You should have a button with the ID generate. Additionally, create a div element with the ID randomNumber to display the generated random number or error messages.

Challenge 3: Input Validation
When the generate button is clicked, check the values in the input fields. If either value is not a number, the div with the ID randomNumber should display the text Invalid Input.

Challenge 4: Displaying the Random Number
On clicking the generate button with valid number inputs in startRange and endRange, a random number (inclusive) between these two values should be generated and displayed in the div with the ID randomNumber.

Challenge 5: Updating the Random Number
Every time the generate button is clicked, a new random number should be generated and displayed. Ensure that the random number updates with each click.
