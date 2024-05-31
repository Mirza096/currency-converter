#! /usr/bin/env node

import inquirer from "inquirer"

const Currency: any = {
    USD: 1, // base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};

let user_answer = await inquirer.prompt(
    [
        {
            name: 'from',
            message: "Enter From Currency",
            type: 'list',
            choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
       
        },
        {
            name: 'to',
            message: "Enter to Currency",
            type: 'list',
            choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
       
        },
        {
            name: 'amount',
            message: "Enter your amount",
            type: 'number',
                  
        }
    ]
)

let fromAmount = Currency[user_answer.from] // exchange rate
let toAmount = Currency[user_answer.to] // exchange rate
let amount = user_answer.amount
let baseAmount = amount / fromAmount // USD base currency
let convertedAmount = baseAmount * toAmount
let formattedConvertedAmount = convertedAmount.toFixed(2); // Round to 2 decimal places
console.log(`Converted amount: $${formattedConvertedAmount}`);
// console.log(fromAmount);
// console.log(toAmount);
// console.log(amount);