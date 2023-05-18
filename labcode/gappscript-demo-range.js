

function accessRangeFirstSheet() {

    // Approach #1: Access a sheet by its name
    let firstSheet = SpreadsheetApp.getActive().getSheetByName("Sheet1");

    // reference a range in a sheet using A1 notation
    let rangeFirstSheet = firstSheet.getRange("A3:C6").getValues();

    Logger.log("Display the first range of values in  firstSheet using in raw format");
    Logger.log(rangeFirstSheet);

    Logger.log("Display the first range of values in  firstSheet using JSON stringify");
    Logger.log(JSON.stringify(rangeFirstSheet));

    // reference all cells in sheet with valid values starting from A1
    let rangeFirstSheetv2 = firstSheet.getDataRange().getValues();
    Logger.log("Display the second range of values in  firstSheet using JSON stringify");
    Logger.log(JSON.stringify(rangeFirstSheetv2));


}


function accessRangeSecondSheet() {

    // get a sheet by its location in the array of sheets returned
    // index[0] references 1st sheet, index[1] references 2nd sheet, etc, etc
    let secondSheet = SpreadsheetApp.getActive().getSheets()[1];

    // reference a range in a sheet using row,col,numRows
    // starting from row 4, col 3, access 5 cells in consecutive rows
    let rangeSecondSheetv1 = secondSheet.getRange(4, 3, 5).getValues();

    Logger.log("Display the first range of values in  secondSheet using JSON stringify");
    Logger.log(JSON.stringify(rangeSecondSheetv1));



}

function accessRangeThirdSheet() {

    /*    For this function to work, the 3rd sheet (Sheet3) 
    must be selected and a custom range highlighted within the table
    of numbers there
     */

    // activate a sheet by selecting it before running this function
    // for this example, we will assume that is Sheet3
    let selectedSheet = SpreadsheetApp.getActive().getActiveSheet();

    // reference a range in a sheet using row,col,numRows,numColumns
    // starting from row 6, col 2, access 2 rows of 3 columns each in consecutive rows
    let rangeSelectedSheet = selectedSheet.getRange(6, 2, 2, 3).getValues();
    Logger.log("Display the range of values in the selected sheet (which should be sheet 3) using JSON stringify");
    Logger.log(JSON.stringify(rangeSelectedSheet));


    // reference the selected range in a sheet
    // make sure you highlight a range in the selected sheet (Sheet3) before running 
    let rangeSelectedSheetv2 = selectedSheet.getActiveRange().getValues();
    Logger.log("Display the second range of values in the selected Sheet using JSON stringify");
    Logger.log(JSON.stringify(rangeSelectedSheetv2));


}