class Person {
    constructor(name){
        this.name = name
        console.log('Person Created');

    }
//methods to return values needed for objects
    getPowers() {
        return null;
    }

    getStoneName() {
        return null;
    }

    toString() {
        return `name: ${this.name}; powers: ${this.getPowers()}; getStoneName: ${this.getStoneName()}`
    }

    getName(){
        return this.name
    }

    getAverage() {
        return null
    }
}