const inquirer = require("./node_modules");

const {questions} = requires("./CyberPet/questions");
const {pokemon} = requires("./CyberPet/pokemon");

class Bulbasaur extends pokemon{
    constructor(name){
        super(name);
    }

    activity(){

    }
}

module.exports = {
    bulb,
}