class SuperToon extends Person{
    constructor(name) {
        super(name)
        this.role = "All Mighty"
        this.attackpowers = [1000000]
        this.universe = "I am everywhere"
    }
}
let movieLocal = document.querySelector("#movieLocation")
SuperToon.movieLocation = movieLocal.value