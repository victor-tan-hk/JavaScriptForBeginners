
function customMenu() {
    var menu = SpreadsheetApp.getUi().createMenu("Cool functions");
    menu.addItem("Generate student grade table", "createGradeTableOption");
    menu.addItem("Send email to students", "sendEmailOption");
    menu.addToUi();
}

function createGradeTableOption() {
    createGradeTable();
    SpreadsheetApp.getActive().toast("Generated table of grades for all students");
}

function sendEmailOption() {
    sendEmailCustomizedMessage();
    SpreadsheetApp.getActive().toast("Customized email send to all students with valid emails");
}