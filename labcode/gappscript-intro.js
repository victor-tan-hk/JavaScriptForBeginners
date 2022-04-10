

function helloWorld() {

    Logger.log("Hello World !");
    Logger.log("This is my first Google Apps Script function");
    let x = 3;
    let y = 5;
    let result = x + y;
    Logger.log("3 + 5 gives us " + result);

}


function demoSampleStuff() {

    // Demonstrating a sample of the standard JavaScript constructs

    // Demonstrating using the for loop to sum numbers
    let sum = 0;
    for (let i = 1; i <= 5; i++) {
        sum += i;
    }
    Logger.log("The sum of 1 to 5 is " + sum);

    // Demonstrating if-else-if statements

    /* Conditions to qualify for the loan
    1. if you earn 5000 or more a month and you have EPF savings of at least 60000
    2. if you earn less than 5000 a month and you have EPF savings of at least 80000
    3. if you are married and both you and your spouse together earn 10000 or more a month and your EPF savings is at least 30000 */


    Logger.log("Loan Example #2");
    // Change the values here to test out the logic of the conditional statement
    let spouseMonthlySalary = 8000;
    monthlySalary = 2000;
    isMarried = true;
    epfSavings = 70000;

    if (isMarried) {
        if (spouseMonthlySalary + monthlySalary >= 10000) {
            if (epfSavings >= 30000) {
                Logger.log("You qualify for the loan. Yay !")
            } else {
                Logger.log("Sorry ! You don't qualify ....");
            }
        } else {
            Logger.log("Sorry ! You don't qualify ....");
        }
    } else {

        if (monthlySalary >= 5000 && epfSavings >= 60000)
            Logger.log("You qualify for the loan. Yay !")
        else if (monthlySalary < 5000 && epfSavings >= 80000)
            Logger.log("You qualify for the loan. Yay !")
        else
            Logger.log("Sorry ! You don't qualify ....")
    }

    // Demonstrating working with arrays
    let basicNumbers = [30, 50, -10, 80, 25, 60, 15, 42];
    Logger.log("The array of numbers is : " + basicNumbers);

    Logger.log("Finding the sum / average of the numbers in the array");

    sum = 0;
    for (let number of basicNumbers) {
        sum += number;
    }
    Logger.log("The sum of all the numbers is : " + sum);
    Logger.log("The average of all the numbers is : " + (sum / basicNumbers.length));

    // Finding the smallest / largest number in an array
    let smallestNumber = basicNumbers[0];
    let largestNumber = basicNumbers[0];
    for (let number of basicNumbers) {
        if (smallestNumber > number)
            smallestNumber = number;
        if (largestNumber < number)
            largestNumber = number;
    }
    Logger.log("The largest number in the array is " + largestNumber);
    Logger.log("The smallest number in the array is " + smallestNumber);



}

function addThreeNumbers(firstNum, secondNum, thirdNum) {
    let result = firstNum + secondNum + thirdNum;
    return result;
}

function returnColOfNumbers(finalValue) {

    // Check first whether the parameter passed to function
    // is a number, since the function will not work 
    // properly if it is not 
    if (typeof finalValue != "number")
        throw "This function expects a number !";

    // Since user could enter a number with fractional digits
    // round the number to the closest integer
    // using the standard JavaScript Math object
    finalValue = Math.floor(finalValue);

    let rows = [];


    // To create a column of numbers
    // We need to place a number on each row
    // So we create an array
    // and we place the numbers into that array  
    // Each element of the array represents
    // content on a new row

    for (let i = 1; i <= finalValue; i++) {
        rows[i - 1] = i;
    }

    return rows;
}


function returnRowOfNumbers(finalValue) {

    // Check first whether the parameter passed to function
    // is a number, since the function will not work 
    // properly if it is not 
    if (typeof finalValue != "number")
        throw "This function expects a number !";

    // Since user could enter a number with fractional digits
    // round the number to the closest integer
    // using the standard JavaScript Math object
    finalValue = Math.floor(finalValue);


    // To create a row of numbers
    // We need to place a number on each column
    // So we create an array
    // with a single element that is also an array
    // and we place the numbers into that array  

    let rows = [];
    // Create an initial empty array as the first element of rows
    rows[0] = [];

    for (let i = 1; i <= finalValue; i++) {
        rows[0][i - 1] = i;
    }

    return rows;
}


function returnTableOfNumbers(numRow, numColumn, rowStartVal, rowIncrementVal) {

    // Check first whether the parameters passed to the function
    // are numbers, since the function will not work 
    // properly if they are not 
    if (typeof numRow != "number" || typeof numColumn != "number" || typeof rowStartVal != "number" || typeof rowIncrementVal != "number")
        throw "All parameters for this function must be a number !";

    // Since the parameters might not be an integers, 
    // we'll round it down to nearest integer 
    numRow = Math.floor(numRow);
    numColumn = Math.floor(numColumn);
    rowStartVal = Math.floor(rowStartVal);
    rowIncrementVal = Math.floor(rowIncrementVal);

    // Create the 2-D array
    let rows = [];

    let startValForRow = rowStartVal;
    // Outer for loop goes through the rows 
    for (let i = 0; i < numRow; i++) {
        rows[i] = [];
        // Inner for loop goes through the columns
        for (let j = 0; j < numColumn; j++) {
            rows[i][j] = startValForRow + j;
        }

        startValForRow += rowIncrementVal;

    }

    // Return this two-dimensional array.
    return rows;
}


