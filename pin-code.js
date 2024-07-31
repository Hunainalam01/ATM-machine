#! /usr/bin/env node
import inquirer from "inquirer";
export const finalAns = await inquirer.prompt([
    {
        message: "Enter Your Pin Code !",
        type: "number",
        name: "pinNumber",
    },
]);
