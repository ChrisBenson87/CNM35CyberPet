const inquirer = require("./node_modules");

const {questions} = requires("./CyberPet/questions");
const {pokemon} = requires("./CyberPet/pokemon");

class Charmander extends pokemon{
    constructor(name){
        super(name);
    }
}

module.exports = {
    char,
}