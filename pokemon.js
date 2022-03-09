class pokemon {
    constructor(name){
        this._name = name;
        this._health = 100;
        this._realtionship = 100;
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
}