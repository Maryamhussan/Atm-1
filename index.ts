#!/usr/bin/env node

import inquirer from "inquirer";
let myBalance = 50000; //Dollar
let myPin = 22440;
let pinanswer = await inquirer.prompt([{
        name: "Q1",
        message: "Enter Your Pin :",
        type: "number"
    }
]);
if (pinanswer.Q1 === myPin) {
    console.log("Correct Pin Code!!! ");
    let operationanswer = await inquirer.prompt([{
            name: "operation",
            message: " Please Select One Option",
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fast Cash"]
        }]);

if (operationanswer.operation === "Withdraw") {
    let amountans = await inquirer.prompt([{
      name: "amount",
    message: "enter Your Amount :",
   type: "number "
 }]);
    if (amountans.amount > myBalance) {
                console.log("Your account does not have sufficient amount!");
            }
            myBalance -= amountans.amount;
            console.log("Your Remaining Balance is :" + myBalance);
        }
    else if (operationanswer.operation === "Check Balance") {
            let balance = 'Your Balance Is:';
            let c = `${balance} ${myBalance}`;
            console.log(c);
        }
        if (operationanswer.operation === "Fast Cash") {
            let amountans = await inquirer.prompt([{
                    name: "amount",
                    message: "Please Select The Amount You Want To Withdraw :",
                    type: "list",
                    choices: [1000, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000]
                }]);
            if (amountans.amount === 1000) {
                myBalance -= amountans.amount;
                console.log("Your Remaining Balance is :" + myBalance);
            }
            ;
            if (amountans.amount === 5000) {
                myBalance -= amountans.amount;
                console.log("Your Remaining Balance is :" + myBalance);
            }
            ;
            if (amountans.amount === 10000) {
                myBalance -= amountans.amount;
                console.log("Your Remaining Balance is :" + myBalance);
            }
            ;
            if (amountans.amount === 15000) {
                myBalance -= amountans.amount;
                console.log("Your Remaining Balance is :" + myBalance);
            }
            ;
            if (amountans.amount === 20000) {
                myBalance -= amountans.amount;
                console.log("Your Remaining Balance is :" + myBalance);
            }
            ;
            if (amountans.amount === 25000) {
                myBalance -= amountans.amount;
                console.log("Your Remaining Balance is :" + myBalance);
            }
            ;
            if (amountans.amount === 30000) {
                myBalance -= amountans.amount;
                console.log("Your Remaining Balance is :" + myBalance);
            }
            ;
            if (amountans.amount === 35000) {
                myBalance -= amountans.amount;
                console.log("Your Remaining Balance is :" + myBalance);
            }
            ;
            if (amountans.amount === 40000) {
                myBalance -= amountans.amount;
                console.log("Your Remaining Balance is :" + myBalance);
            }
            ;
            if (amountans.amount === 45000) {
                myBalance -= amountans.amount;
                console.log("Your Remaining Balance is :" + myBalance);
            }
            ;
            if (amountans.amount === 50000) {
                myBalance -= amountans.amount;
                console.log("Your Remaining Balance is :" + myBalance);
            }
            ; } } else {
        console.log("Incorrect Pin Code");
            };
        
 
         