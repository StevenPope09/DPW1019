class SuperToon extends Person{
    constructor(name) {
        super(name)
        this.role = "All Mighty"
        this.powers = "EVERY POWER!"
        this.universe = "I am everywhere"
    }
}
let movieLocal = document.querySelector("#movieLocation")
SuperToon.movieLocation = movieLocal.value