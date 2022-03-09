const questions = {
    choosePokemon:{
        type: "list",
        name: "Pokemon",
        output: "Choose your Pokemon!",
        choices: [
            {
                key: "1",
                pokemon: "Bulbasaur",
                value: "bulbasaur",
            },
            {
                key: "2",
                pokemon: "Charmander",
                value: "charmander",
            },
            {
                key: "3",
                pokemon: "Squirtle",
                value: "squirtle",
            },
        ],
    },
    bulbasaurMenu:{
        type: "list",
        name: "Bulbasaur's Menu",
        output: `What would you like to treat ${this.name}?`,
        choices: [
            {
                key: '1',
                option: 'Grass: Health + 4, Relationship + 2',
                value: 'grass'
            },
            {
                key: '2',
                option: 'Bugs: Health + 2, Relationship - 3',
                value: 'bugs'
            },
            {
                key: '3',
                option: 'Water: Health + 3, Relationship + 3',
                value: 'water'
            },
            {
                key: '4',
                option: 'Sunshine: Health + 2, Relationship + 5',
                value: 'sunshine'
            }
        ]
    },
    bulbasaurActivities:{
        type: "list",
        name: "Bulbasaur's Activites",
        output: `What would you like to do ${this.name}?`,
        choices: [
            {
                key: '1',
                option: 'Grass: Health - 3 Relationship + 2', //need to remove stat stuff
                value: 'grass'
            },
            {
                key: '2',
                option: 'Bugs: Health + 2, Relationship + 1',
                value: 'bugs'
            },
            {
                key: '3',
                option: 'Water: Health + 3, Relationship + 3',
                value: 'water'
            },
            {
                key: '4',
                option: 'Sunshine: Health + 2, Relationship + 5',
                value: 'sunshine'
            }
        ]
    },
    CharmanderMenu:{
        type: "list",
        name: "Bulbasaur's Menu",
        output: `What would you like to treat ${this.name}?`,
        choices: [
            {
                key: '1',
                option: 'Grass: Health + 4, Relationship + 2',
                value: 'grass'
            },
            {
                key: '2',
                option: 'Bugs: Health + 2, Relationship - 3',
                value: 'bugs'
            },
            {
                key: '3',
                option: 'Water: Health + 3, Relationship + 3',
                value: 'water'
            },
            {
                key: '4',
                option: 'Sunshine: Health + 2, Relationship + 5',
                value: 'sunshine'
            }
        ]
    },
    CharmanderActivities:{
        type: "list",
        name: "Bulbasaur's Activites",
        output: `What would you like to do ${this.name}?`,
        choices: [
            {
                key: '1',
                option: 'Grass: Health - 3 Relationship + 2', //need to remove stat stuff
                value: 'grass'
            },
            {
                key: '2',
                option: 'Bugs: Health + 2, Relationship + 1',
                value: 'bugs'
            },
            {
                key: '3',
                option: 'Water: Health + 3, Relationship + 3',
                value: 'water'
            },
            {
                key: '4',
                option: 'Sunshine: Health + 2, Relationship + 5',
                value: 'sunshine'
            }
        ]
    },
    SquirtleMenu:{
        type: "list",
        name: "Bulbasaur's Menu",
        output: `What would you like to treat ${this.name}?`,
        choices: [
            {
                key: '1',
                option: 'Grass: Health + 4, Relationship + 2',
                value: 'grass'
            },
            {
                key: '2',
                option: 'Bugs: Health + 2, Relationship - 3',
                value: 'bugs'
            },
            {
                key: '3',
                option: 'Water: Health + 3, Relationship + 3',
                value: 'water'
            },
            {
                key: '4',
                option: 'Sunshine: Health + 2, Relationship + 5',
                value: 'sunshine'
            }
        ]
    },
    SquirtleActivities:{
        type: "list",
        name: "Bulbasaur's Activites",
        output: `What would you like to do ${this.name}?`,
        choices: [
            {
                key: '1',
                option: 'Grass: Health - 3 Relationship + 2', //need to remove stat stuff
                value: 'grass'
            },
            {
                key: '2',
                option: 'Bugs: Health + 2, Relationship + 1',
                value: 'bugs'
            },
            {
                key: '3',
                option: 'Water: Health + 3, Relationship + 3',
                value: 'water'
            },
            {
                key: '4',
                option: 'Sunshine: Health + 2, Relationship + 5',
                value: 'sunshine'
            }
        ]
    }
}


module.exports = {
    questions,
}