/* eslint-disable */


// This is what I should've done to start the lab...
// OMG, we even did a lab on making arithmetic libs...


var tableCalc = {
    sumRow: function (array, key1, key2) {
        // sum the row
        // array will be objectArray['objectKey']
        // key1 will be key for an array with values to sum
        // key2 will be key for a place to put the sum (either the same object or a different object)
    },
    sumCol: function() {
        //sum the column
    },
    rowMultNum: function() {
        //multiply a row by a number
    },
    cellToRow: function () {
        //add a cell to a row
    },
    cellToCol: function() {
        //add a cell to a column
    },
};

var libCalc = {
    getRandomHRs: function(min, max) {
        max = Math.floor(max);
        min = Math.ceil(min);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is exclusive and the minimum is inclusive
    },
    preciseFloats: function() {
        //take a number, use toPrecision (turning it into a string) and then parseFloat to put it back into a number
    },
};

var htmlMaker = {
    storeTableCreator: function () {
        //make the damn table
        // components:
        //   -add parent tags
        //   -iterate siblings
    },
    addParentTags: function(parenttag, childstring, styling) {
        // ex: put <tr> around <td>
    },
    iterateSiblingTags: function() {
        // ex: create a string with a bunch of one type of tag
    },
};