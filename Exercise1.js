/**
 *   @author Allen, Michael
 *   @version 0.0.2
 *   @summary Code demonstration: My Knowledge  :: created: 11.18.2019
 *   @todo Nothing
 */

"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let lotNumber, numberOfBedrooms, sizeOfGarage, numberOfBathrooms, totalBill;

function main() {
    if (continueResponse !== 0 && continueResponse !== 1) {
        setContinueResponse();
    }
    if (continueResponse === 1) {
        setLotNumber();
        setNumberOfBedrooms();
        setNumberOfBathrooms();
        setSizeOfGarage();
        setTotalBill();
        printTotalBill();
        setContinueResponse();
        return main();
    }
    printGoodbye();
}

main();


function setContinueResponse() {
    if (continueResponse === 1 || continueResponse === 0) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        if (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = 1;
            return setContinueResponse();
        }
    } else {
        continueResponse = 1;
    }
}


function setLotNumber() {
    lotNumber = Math.floor((Math.random() * 20) + 1);
}


function setNumberOfBedrooms() {
    numberOfBedrooms = Number(PROMPT.question(`\nPlease enter how many bedrooms you want: `));

}

function setNumberOfBathrooms() {
    numberOfBathrooms = Number(PROMPT.question(`\nPlease enter how many bathrooms you want: `));

}


function setSizeOfGarage() {
	sizeOfGarage = Number(PROMPT.question('\nPlease enter how many garage slots you want: '));

}
function setTotalBill() {
    totalBill = 0;
    const BEDROOM_PRICE = 17000;
    const BATHROOM_PRICE = 12500;
    const GARAGESLOT_PRICE = 6000;
	totalBill = (numberOfBedrooms * BEDROOM_PRICE) + (numberOfBathrooms * BATHROOM_PRICE) + (sizeOfGarage * GARAGESLOT_PRICE);
    
}
function printTotalBill() {
    console.log(`\n\t${lotNumber}'s bill: \$${totalBill}.`);
}


function printGoodbye() {
    console.log(`\n\tGoodbye.`);
}

