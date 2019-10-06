class Toon extends Person {
    constructor(name,powers,role,universe) {
        super(name)
        this.attackPowers = powers
        this.role = role
        this.universe = universe
    }
    
}
movieLocal = document.querySelector("#movieLocation")

Toon.movieLocation = movieLocal.value
