


function findAverageMarkForStudent() {

    let studentSheet = SpreadsheetApp.getActive().getSheetByName("Students");
    let data = studentSheet.getDataRange().getValues();

    Logger.log("Calculating average mark for each student");
    // Start from 2nd row as the 1st row is header
    for (i = 1; i < data.length; i++) {
        let markTotal = 0;
        // Iterate through the columns to sum the individual marks
        // Start from 2nd column, since 1st column holds student name
        for (j = 1; j < data[i].length; j++) {
            markTotal += data[i][j];
        }
        let averageMark = Math.floor(markTotal / (data[i].length - 1));
        Logger.log("Name : " + data[i][0] + ", Average subject mark : " + averageMark);  
    }
}

function findAverageMarkForSubject() {

    let studentSheet = SpreadsheetApp.getActive().getSheetByName("Students");
    let data = studentSheet.getDataRange().getValues();

    Logger.log("Calculating average mark for each subject");
    // Start from 2nd column as the 1st column holds student name
    for (j = 1; j < data[0].length; j++) {
        let markTotal = 0;
        // Iterate through the rows to sum the marks for each subject
        // Start from 1st row, since marks start from there         
        for (i = 1; i < data.length; i++) {
            markTotal += data[i][j];
        }
        let averageMark = Math.floor(markTotal / (data.length - 1));
        Logger.log("Subject : " + data[0][j] + ", Average subject mark : " + averageMark);  
    }

}


function createGradeTable() {

    let studentSheet = SpreadsheetApp.getActive().getSheetByName("Students");
    let data = studentSheet.getDataRange().getValues();

    // Construct a new table from the existing 2-d table from data
    let newTable = [];

    for (i = 0; i < data.length; i++) {
        newTable[i] = [];
        newTable[i][0] = data[i][0];
        for (j = 0; j < data[i].length; j++) {
            if (i === 0 || j === 0) {
                newTable[i][j] = data[i][j];
            } else
                newTable[i][j] = getGradeForMark(data[i][j]);
        }
    }
    // use setValues to place the 2d array as table into the sheet 
    studentSheet.getRange("A15:E25").setValues(newTable);
}

function getGradeForMark(mark) {

    let grade = '';
    if (mark < 40) {
        grade = 'F';
    } else if (mark >= 40 && mark < 50) {
        grade = 'D';
    } else if (mark >= 50 && mark < 60) {
        grade = 'C';
    } else if (mark >= 60 && mark < 70) {
        grade = 'B';
    } else {
        grade = 'A';
    }
    return grade;
}


