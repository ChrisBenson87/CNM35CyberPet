const inquirer = require('inquirer');
const {questions} = require("./questions");



let userPet;

async function startGame () {
    const {choosePokemon} = await inquirer.prompt(questions.choosePokemon);
}
    // if(health = 100){
    //     console.log("Your pokemon is evolving");
    // }

    // if(health = 0){
    //     console.log("Your pokemon fainted");
    // }
    
    // if(realtionship = 0){
    //     console.log("Your pokemon ran-away");
    // }

startGame();