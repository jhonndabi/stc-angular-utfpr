"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var exercises_1 = require("./exercises");
inquirer_1.default.prompt([{
        type: 'rawlist',
        message: 'Exercícios de EcmaScript 2015',
        name: 'choice',
        choices: [
            { name: 'Exercício 1', value: 1 },
            { name: 'Exercício 2', value: 2 },
            { name: 'Exercício 3', value: 3 },
        ],
    }]).then(function (answers) {
    console.log('\n');
    switch (answers.choice) {
        case 1:
            exercises_1.default.first();
            break;
        case 2:
            exercises_1.default.second();
            break;
        case 3:
            exercises_1.default.third();
            break;
        default:
            break;
    }
});
