const inquirer = require('inquirer');
const {questions} = require("./questions");

class pokemon {
    constructor(name){
        this._name = name;
        this._health = 100;
        this._relationship = 5;
    }

    get name(){
        return this._name;
    }

    get health(){
        return this._health;
    }

    get relationship(){
        return this._relationship;
    }

    set name(name){
      this._name = name
    }

    set health(health){
      this._health = health
    }

    set relationship(relationship){
      this._relationship = relationship
    }

    eat() {
      // Do stuff plz        
    }
}

module.exports = {
  pokemon,
}