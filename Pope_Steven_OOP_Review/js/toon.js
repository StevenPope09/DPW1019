class Toon extends Person {
    constructor(name,powers,role,universe, stoneName) {
        super(name)
        this.attackPowers = powers
        this.role = role
        this.universe = universe
        this.stone = new Stone(stoneName);
    }
//methods to return values needed for objects
    getPowers() {
        return this.attackPowers;
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
        return Toon.movieLocation
    }
    getAverage() {
        let powerArr = Utils.desconstructStringToNumArr(this.attackPowers)
        return Utils.getAverage(powerArr)
    }

    toString() {
        return super.toString() + " " + `role: ${this.role} universe: ${this.universe} movie location: ${SuperToon.movieLocation}`;
    }

    
}
movieLocal = document.querySelector("#movieLocation")
movieLocal.addEventListener('keyup', (e) => {
    Toon.movieLocation = e.target.value;
})
Toon.movieLocation = movieLocal.value
