

// Uses a regular expression to validate 
// that the email address is in correct format
// based on a basic email outline of string1@string2.string3
// https://stackoverflow.com/a/9204568

// If the email you are using in the Google sheet is not of this
// format, just modify this function to always return true

function isValidEmail(emailAddress) {
    let regExp = /\S+@\S+\.\S+/;
    return regExp.test(emailAddress);
}

function sendEmailBasicMessage() {

    let studentSheet = SpreadsheetApp.getActive().getSheetByName("Students");
    let emailList = studentSheet.getRange("F16:F25").getValues();
    for (i = 0; i < emailList.length; i++) {
        let emailAddress = emailList[i][0];

        // Send only if an email address value is supplied
        // Also validate that this is a correct email address
        if (emailAddress.length > 0 && isValidEmail(emailAddress)) {

            Logger.log("Sending an email to : " + emailAddress);
            let subject = "Check out Apps Script";
            let body = "I just discovered Apps Script and it's so cool!";
            MailApp.sendEmail(emailAddress, subject, body);

        }
    }
}

function sendEmailCustomizedMessage() {

    let studentSheet = SpreadsheetApp.getActive().getSheetByName("Students");
    let studentTable = studentSheet.getRange("A16:F25").getValues();

    for (i = 0; i < studentTable.length; i++) {
        let studentName = studentTable[i][0];
        let countGradeA = 0;
        let countGradeF = 0;
        for (j = 1; j < 5; j++) {
            if (studentTable[i][j] === 'A')
                countGradeA++;
            else if (studentTable[i][j] === 'F')
                countGradeF++;
        }
        // Create a customized message to send in the email
        let body = "Hi there, " + studentName + "\n\n";
        if (countGradeA > 0) {
            body += "  You got an A for " + countGradeA + " subjects. That's awesome ! \n\n";
        }
        if (countGradeF > 0) {
            body += "  You failed " + countGradeF + " subjects. Time to buck up ! \n\n";
        }
        if (countGradeA === 0 && countGradeF === 0) {
            body += "  Your results are OK. Keep on working hard ! \n\n";
        }
        body += "Best regards,\nYour teacher";

        emailAddress = studentTable[i][5];

        // Send only if an email address value is supplied
        // Also validate that this is a correct email address
        if (emailAddress.length > 0 && isValidEmail(emailAddress)) {

            Logger.log("Sending an email to : " + emailAddress);
            let subject = "Summary of your exam results";
            MailApp.sendEmail(emailAddress, subject, body);

        }
    }
}

