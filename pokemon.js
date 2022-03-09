const inquirer = require("./node_modules");

class pokemon {
    constructor(name){
        this._name = name;
        this._health = 100;
        this._realtionship = 5;
    }

    get name(){
        return this._name;
    }

    get health(){
        return this._health;
    }

    get realtionship(){
        return this._realtionship;
    }

    set name(name){
      this._name = name
    }

    set health(health){
      this._health = health
    }

    set realtionship(relationship){
      this._realtionship = relationship
    }

    eat() {
      // Do stuff plz        
    }
}
