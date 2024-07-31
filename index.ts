#! /usr/bin/env node

import inquirer from "inquirer";

let currentBalance: number = 12000; //Current balance

const pinCode: number = 45345; // Pin code

// import Pin code Required to proceed
import { finalAns } from "./pin-code.js";

// Checking is Pin code correct or not
if (finalAns.pinNumber === pinCode) {
  console.log(`Your Current Balance is ${currentBalance}`); // logging current balance

  // Giving options what to do next
  let operationProcess = await inquirer.prompt([
    {
      message: "What to do Next !",
      name: "operation",
      type: "list",
      choices: ["Withdraw", "Checking Balance", "Fast Cash"],
    },
  ]);

  // for option "withdraw" perform this operation
  if (operationProcess.operation === "Withdraw") {
    let remainingAmount = await inquirer.prompt([
      {
        message: "Enter your amount ",
        name: "amount",
        type: "number",
      },
    ]);

    // if you put greater amount than you have
    if (remainingAmount.amount > currentBalance) {

      console.log(`Transaction declined: Insufficient funds`);
    
    } else if ((currentBalance -= remainingAmount.amount)) { // detecting your amount      
      console.log(`Your Remaining Balance is ${currentBalance}`);
    }

    // for option "Checking Balance" perform this operation
  } else if (operationProcess.operation === "Checking Balance") {

    console.log(`Your Available Balance Is ${currentBalance}`);

    // for option "Fast Cash" perform this operation
  } else if (operationProcess.operation === "Fast Cash") {

    let fastCash = await inquirer.prompt([
      {
        message: "please select the amount",
        type: "list",
        name: "quickFastCash",
        choices: ["1000", "5000", "10000", "20000"],
      },
    ]);

    // If You have lesser amount than given options
    if (fastCash.quickFastCash > currentBalance) {

      console.log(`Transaction declined: Insufficient funds`);
    }
    // if you have amount
    else if ((currentBalance -= fastCash.quickFastCash)) {

      console.log(`Your Remaining Balance is ${currentBalance}`);
    }
  }

  // if pin code is incorrect
} else {
  console.log(`please Enter the correct pin number!`);
}
