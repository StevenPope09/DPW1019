class SuperToon extends Person {
    constructor(name, stoneName) {
        super(name)
        this.role = "All Mighty"
        this.universe = "I am everywhere"
        this.stone = new Stone(stoneName);
        console.log('create super toon');

    }
//methods to return values needed for objects
    getPowers() {
        return [10000];
    }

    getStoneName() {
        return this.stone.name;
    }
    getRole(){
        return this.role
    }
    getUniverse(){
        return this.universe
    }
    getMovie(){
        return SuperToon.movieLocation
    }
    getAverage() {
        return "I am enevitable!"
    }

    toString() {
        return super.toString() + " " + `role: ${this.role} universe: ${this.universe} movie location: ${SuperToon.movieLocation}`;
    }
}
let movieLocal = document.querySelector("#movieLocation")
SuperToon.movieLocation = movieLocal.value
movieLocal.addEventListener('keyup', (e) => {
    SuperToon.movieLocation = e.target.value;
})
