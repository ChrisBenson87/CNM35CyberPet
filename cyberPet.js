const inquirer = require('inquirer');
const {questions} = require("./questions");

const {Bulbasaur} = require("./pokemons/bulb");
const {Charmander} = require("./pokemons/char");
const {Squirtle} = require("./pokemons/squir");

let userPokemon;

async function startGame () {
    const {choosePokemon} = await inquirer.prompt(questions.choosePokemon);

    const {pokemonName} = await inquirer.prompt({
        type: "input",
        name: "pokemonName",
        output: "Name your pokemon!",
    });

    if (choosePokemon === "bulbasaur") userPokemon = new Bulbasaur(pokemonName);
    else if (choosePokemon === "charmander") userPokemon = new Charmander(pokemonName);
    else if (choosePokemon === "squirtle") userPokemon = new Squirtle(pokemonName);

    gameMenu();
};

async function gameMenu () {

    const {menu} = await inquirer.prompt(questions.menuChoices);

    if(menu === "nourish") await userPokemon.nourish();
    else if(menu === "play") await userPokemon.activities();
};


    // if(realtionship = 100){
    //     console.log("Your pokemon is evolving");
    // }

    // if(health = 0){
    //     console.log("Your pokemon fainted");
    // }
    
    // if(realtionship = 0){
    //     console.log("Your pokemon ran-away");
    // }

startGame();