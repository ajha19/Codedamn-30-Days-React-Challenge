======== Simple Interest Calculator ===============

=> Quick Start
Follow the below steps to run the project.

1. Clone repository
2. Run npm i command to install dependencies
3. Execute npm start command to run the project

In this lab, you'll create a simple interest calculator using React. This calculator will take input for the principal amount, annual interest rate, and time in years, and then calculate the simple interest and total amount.

Objectives
Implement the simple interest calculation logic that responds to input changes.
Display the calculated interest and total amount with two decimal places.
Steps
Create Input Fields: You will create three inputs for the principal amount, interest rate, and time with corresponding IDs #principal, #rate, and #time.
Create Output Divs: Establish two divs to show the calculated simple interest and total amount with IDs #simpleInterest and #totalAmount.
Default Values: Inputs should be pre-filled with default values when the page loads.
Dynamic Calculation: The app should calculate and display the simple interest and total amount dynamically as the user changes the values of the inputs.
Styling with Tailwind CSS: Apply Tailwind CSS classes to style your layout and elements. Ensure a centered layout for a clean and responsive design.
Styling Guidelines
You can Utilize Tailwind CSS for styling all elements.
Remember to keep the user interface intuitive and accessible. Test your application thoroughly to ensure that all calculations are correct and that the layout is responsive on different screen sizes.

Challenges
Challenge 1: Create Input Fields
Ensure there are input elements of type number with IDs #principal, #rate, and #time. These will capture the principal amount, annual interest rate, and time in years, respectively.

Challenge 2: Display Simple Interest
Create an output div with the ID #simpleInterest. This element will display the calculated simple interest based on the input values.

Challenge 3: Set Default Input Values
When the page is rendered, set the default values of the input elements to 1000 for #principal, 7 (representing 7%) for #rate, and 5 for #time.

Challenge 4: Update Interest on Input Change
Whenever any input value changes, calculate and update the displayed simple interest. The formula to calculate simple interest is (principal * rate * time) / 100. The result should always be displayed with two decimal places, rounded if necessary.

Challenge 5: Calculate Total Amount
Include a second output div with the ID #totalAmount to display the sum of the principal amount and the simple interest. This total should also be displayed with two decimal places and should update whenever any input value changes.
