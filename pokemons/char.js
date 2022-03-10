const inquirer = require("inquirer");

const {questions} = require("../questions");
const {pokemon} = require("../pokemon");

class Charmander extends pokemon{
    constructor(name){
        super(name);
    }

    async nourish(){
        const {menu} = await inquirer.prompt(questions.bulbasaurMenu);

        if (menu === 'grass') this.health(+4) && this.relationship(+2);
        if (menu === 'bugs') this.health(+2) && this.relationship(-3);
        if (menu === 'water') this.health(+3) && this.relationship(+3);
        if (menu === 'sunshine') this.health(+4) && this.relationship(+2);
    }

    async activities(){
        const {activities} = await inquirer.prompt(questions.bulbasaurActivities);

        if (menu === 'grass') this.health(+4) && this.relationship(+2);
        if (menu === 'bugs') this.health(+2) && this.relationship(-3);
        if (menu === 'water') this.health(+3) && this.relationship(+3);
        if (menu === 'sunshine') this.health(+4) && this.relationship(+2);
}

}

module.exports = {
    Charmander,
}