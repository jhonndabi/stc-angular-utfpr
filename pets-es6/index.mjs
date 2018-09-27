import inquirer from 'inquirer';
import Exercises from './exercises';

inquirer.prompt([{
  type: 'rawlist',
  message: 'Exercícios de EcmaScript 2015',
  name: 'choice',
  choices: [
    { name: 'Exercício 1', value: 1 },
    { name: 'Exercício 2', value: 2 },
    { name: 'Exercício 3', value: 3 },
  ],
}]).then((answers) => {
  console.log('\n');

  switch (answers.choice) {
    case 1:
      Exercises.first();
      break;
    case 2:
      Exercises.second();
      break;
    case 3:
      Exercises.third();
      break;
    default:
      break;
  }
});
