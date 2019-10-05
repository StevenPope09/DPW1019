class Toon extends Person {
    constructor(powers,role,universe) {

        this.powers = powers
        this.role = role
        this.universe = universe
    }
    
}
movieLocal = document.querySelector("#movieLocation")
movieLocal.value = "Netflix"
Toon.movieLocation = movieLocal.value
