//grab the different elements of HTML 
let addHeroBtn = document.querySelector("#addToon")
let showHeroesBtn = document.querySelector("#showToons")
let toonForm = document.querySelector("#toonForm")
let toonUni = document.querySelector("#universeSelect")
let toonRole = document.querySelector("#roleSelect")
let toonName = document.querySelector("#toonName")
let powers = document.querySelector("#attackPowers")

//create a new array to hold all of the heroes/toons
let toonLineup = [];

//addHero function to create new objects and store them in the array from above
addHeroBtn.addEventListener('click', (e) => {
    e.preventDefault()

    //check which "sort" of toon/hero to create
    if(toonRole.value == "God"){
        console.log("God Created");
        let newSuperPerson = new Person(toonName.value)
        let superToon = new SuperToon()
        console.log(`Name: ${superToon.name} Role: ${superToon.role} Powers: ${superToon.powers} Universe: ${superToon.universe} Movie Location: ${SuperToon.movieLocation}`);
        toonLineup.push(superToon)
        toonForm.reset()
        return
    }else
    console.log("Added Toon");
    let newPerson = new Person(toonName.value)
    let newToon = new Toon(powers.value,toonRole.value,toonUni.value)
    toonLineup.push(newToon)
    toonLineup.forEach(function (e){
        console.log(`Name: ${newToon.name} Powers: ${newToon.powers} Role: ${newToon.role} Universe: ${newToon.universe} Movie Location: ${Toon.movieLocation}`)
    })
    toonForm.reset()
})

showHeroesBtn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log("Loaded Toons");
    let showToons = new ToonLineup(toonLineup)
    console.log(showToons);
})

//console.log(addHeroBtn, showHeroesBtn);


