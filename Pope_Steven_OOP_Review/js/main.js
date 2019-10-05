let addHeroBtn = document.querySelector("#addToon")
let showHeroesBtn = document.querySelector("#showToons")
let toonForm = document.querySelector("#toonForm")

let toonUni = document.querySelector("#universeSelect")
let toonRole = document.querySelector("#roleSelect")
let toonName = document.querySelector("#toonName")
let powers = document.querySelector("#toonPowers")

let toonLineup = [];
// console.log(toonUni.value + " Universe");
// console.log(toonRole.value  + " Role");
// console.log(toonName.value + " Name");
// console.log(powers.value + " Powers");
addHeroBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if(toonRole.value == "God Status!"){
        console.log("God Created");
        let superToon = new SuperToon(toonName.value)
        console.log(`Name: ${superToon.name} Role: ${superToon.role} Powers: ${superToon.powers} Universe: ${superToon.universe} Movie Location: ${SuperToon.movieLocation}`);
        toonLineup.push(superToon)
        toonForm.reset()
        return
    }else
    console.log("Added Toon");
    let newToon = new Toon(toonName.value,powers.value,toonRole.value,toonUni.value)
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


